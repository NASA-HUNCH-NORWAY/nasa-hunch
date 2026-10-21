import "server-only";

type Kind = "contact" | "newsletter";

/*
 * Begrensningen ligger i minnet til én kjørende instans. Den stopper enkle
 * gjentatte innsendinger, men deles ikke mellom Vercel-instanser og nullstilles
 * ved kald start. Bruk Vercel Firewall eller delt lagring ved høy trafikk.
 */
const attempts = new Map<string, { count:number; expires:number }>();
function limited(request: Request, kind: Kind) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const ip = request.headers.get("x-vercel-forwarded-for") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = `${kind}:${ip}`;
  const value = attempts.get(key) || {count:0, expires:now+600_000};
  value.count++; attempts.set(key,value);
  if (attempts.size > 2000) attempts.delete(attempts.keys().next().value!);
  return value.count > 8;
}

const json = (status:number, error:string) => Response.json({error},{status});
// Avviser tegn som ikke hører hjemme i en vanlig adresse, slik at Resend ikke får en adresse det vil avvise.
const validEmail = (email:string) => email.length <= 254 && /^[^\s@"<>()[\],;:\\]+@[^\s@"<>()[\],;:\\]+\.[^\s@"<>()[\],;:\\]+$/.test(email);
const escapeHtml = (value:string) => value.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]!));
const subjects = ["", "Skole og elevprosjekt", "Partnerskap og støtte", "Generelt spørsmål"];

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try { return new URL(origin).origin === new URL(request.url).origin; }
  catch { return false; } // «null» fra sandkasser og personvernmodus
}

/*
 * Sending er bare åpen i produksjon. Vercel Preview og andre miljøer må slå den
 * på med ALLOW_PREVIEW_FORMS=true, så en forhåndsvisning med produksjonsnøkler
 * ikke sender ekte e-post. Lokal utvikling er åpen.
 */
function sendingAllowed() {
  return process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "development" || process.env.ALLOW_PREVIEW_FORMS === "true";
}

async function resend(path:string, payload?:Record<string,unknown>, method="POST") {
 const response = await fetch(`https://api.resend.com${path}`, {method, headers:{authorization:`Bearer ${process.env.RESEND_API_KEY}`,"content-type":"application/json"}, body:payload === undefined ? undefined : JSON.stringify(payload), signal:AbortSignal.timeout(12_000)});
 const data = await response.json().catch(() => ({}));
 return {response,data};
}

// Logger feilen for drift uten personopplysninger fra skjemaet.
function logFailure(kind: Kind, step: string, status?: number, detail?: unknown) {
  const name = detail && typeof detail === "object" && "name" in detail ? (detail as {name:unknown}).name : undefined;
  console.error(`[forms] ${kind} ${step} failed`, {status, name});
}

export async function handleForm(request:Request, kind:Kind) {
 try {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return json(415,"json_required");
  if (!sameOrigin(request)) return json(403,"origin_not_allowed");
  if (Number(request.headers.get("content-length") || 0) > 16_000) return json(413,"invalid_fields");
  const raw = await request.text();
  if (raw.length > 16_000) return json(413,"invalid_fields");
  let body:Record<string,unknown>;
  try { body=JSON.parse(raw); } catch { return json(400,"invalid_fields"); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return json(400,"invalid_fields");
  if (typeof body.website === "string" && body.website.trim()) return Response.json({ok:true});

  // Valider alle felt før konfigurasjonen sjekkes, så feilmeldingene stemmer også lokalt.
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!validEmail(email)) return json(400,"invalid_email");
  const textField = (name:string) => typeof body[name] === "string" ? (body[name] as string).trim() : "";
  const name=textField("name"),organization=textField("organization"),subject=textField("subject"),message=textField("message");
  if (kind === "newsletter" && body.consent !== true) return json(400,"consent_required");
  if (kind === "contact" && (!name || name.length>120 || organization.length>160 || !subjects.includes(subject) || message.length<5 || message.length>5000)) return json(400,"invalid_fields");

  if (limited(request, kind)) return json(429,"rate_limited");
  if (!sendingAllowed()) return json(503,"preview_disabled");
  if (!process.env.RESEND_API_KEY) return json(503,"email_not_configured");

  if (kind === "newsletter") {
   const segment = process.env.RESEND_SEGMENT_ID;
   if (!segment) return json(503,"newsletter_not_configured");
   let result = await resend("/contacts", {email,unsubscribed:false,segments:[{id:segment}]});
   if (result.response.status === 409) {
    const existing = await resend(`/contacts/${encodeURIComponent(email)}`,undefined,"GET");
    if (!existing.response.ok || !existing.data.id) { logFailure(kind,"lookup",existing.response.status,existing.data); return json(502,"newsletter_failed"); }
    // En tidligere avmeldt adresse meldes bare på igjen fordi personen nettopp har gitt nytt samtykke.
    if (existing.data.unsubscribed) {
     const update = await resend(`/contacts/${encodeURIComponent(existing.data.id)}`,{unsubscribed:false},"PATCH");
     if (!update.response.ok) { logFailure(kind,"resubscribe",update.response.status,update.data); return json(502,"newsletter_failed"); }
    }
    result = await resend(`/contacts/${encodeURIComponent(existing.data.id)}/segments/${encodeURIComponent(segment)}`,{});
    if (!result.response.ok && result.response.status !== 409) { logFailure(kind,"segment",result.response.status,result.data); return json(502,"newsletter_failed"); }
    return Response.json({ok:true,alreadySubscribed:!existing.data.unsubscribed});
   }
   if (!result.response.ok) { logFailure(kind,"create",result.response.status,result.data); return json(result.response.status === 429 ? 429 : 502,"newsletter_failed"); }
   return Response.json({ok:true});
  }

  if (!process.env.RESEND_FROM || !process.env.CONTACT_TO_EMAIL) return json(503,"email_not_configured");
  const text = `Fra: ${name}\nE-post: ${email}\nOrganisasjon: ${organization}\nTema: ${subject || "Annet"}\n\n${message}`;
  const result=await resend("/emails",{from:process.env.RESEND_FROM,to:[process.env.CONTACT_TO_EMAIL],reply_to:email,subject:`Nettsidehenvendelse: ${subject || "Generelt spørsmål"}`,text,html:`<h2>Ny henvendelse fra nettsiden</h2><p>${escapeHtml(text).replace(/\n/g,"<br>")}</p>`});
  if (!result.response.ok) { logFailure(kind,"send",result.response.status,result.data); return json(result.response.status === 429 ? 429 : 502,"contact_failed"); }
  return Response.json({ok:true});
 } catch (error) {
  logFailure(kind,"request",undefined,error);
  return json(502,kind === "newsletter" ? "newsletter_failed" : "contact_failed");
 }
}

import "server-only";

const attempts = new Map<string, { count:number; expires:number }>();
function limited(request: Request) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const ip = request.headers.get("x-vercel-forwarded-for") || (process.env.VERCEL ? request.headers.get("x-forwarded-for")?.split(",")[0] : null) || "local";
  const value = attempts.get(ip) || {count:0, expires:now+600_000};
  value.count++; attempts.set(ip,value);
  if (attempts.size > 2000) attempts.delete(attempts.keys().next().value!);
  return value.count > 8;
}
const json = (status:number, error:string) => Response.json({error},{status});
const validEmail = (email:string) => email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const escapeHtml = (value:string) => value.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]!));
async function resend(path:string, payload?:Record<string,unknown>, method="POST") {
 const response = await fetch(`https://api.resend.com${path}`, {method, headers:{authorization:`Bearer ${process.env.RESEND_API_KEY}`,"content-type":"application/json"}, body:payload === undefined ? undefined : JSON.stringify(payload), signal:AbortSignal.timeout(12_000)});
 const data = await response.json().catch(() => ({}));
 return {response,data};
}

export async function handleForm(request:Request, kind:"contact"|"newsletter") {
 try {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return json(415,"json_required");
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).origin !== new URL(request.url).origin) return json(403,"origin_not_allowed");
  if (limited(request)) return json(429,"rate_limited");
  const raw = await request.text();
  if (raw.length > 16_000) return json(413,"invalid_fields");
  let body:Record<string,unknown>;
  try { body=JSON.parse(raw); } catch { return json(400,"invalid_fields"); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return json(400,"invalid_fields");
  if (typeof body.website === "string" && body.website.trim()) return Response.json({ok:true});
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!validEmail(email)) return json(400,"invalid_email");
  if (process.env.VERCEL_ENV === "preview" && process.env.ALLOW_PREVIEW_FORMS !== "true") return json(503,"preview_disabled");
  if (!process.env.RESEND_API_KEY) return json(503,"email_not_configured");
  if (kind === "newsletter") {
   if (body.consent !== true) return json(400,"consent_required");
   const segment = process.env.RESEND_SEGMENT_ID;
   if (!segment) return json(503,"newsletter_not_configured");
   let result = await resend("/contacts", {email,unsubscribed:false,segments:[{id:segment}]});
   if (result.response.status === 409) {
    const existing = await resend(`/contacts/${encodeURIComponent(email)}`,undefined,"GET");
    if (!existing.response.ok || !existing.data.id) return json(502,"newsletter_failed");
    if (existing.data.unsubscribed) {
     const update = await resend(`/contacts/${encodeURIComponent(existing.data.id)}`,{unsubscribed:false},"PATCH");
     if (!update.response.ok) return json(502,"newsletter_failed");
    }
    result = await resend(`/contacts/${encodeURIComponent(existing.data.id)}/segments/${encodeURIComponent(segment)}`,{});
    if (!result.response.ok && result.response.status !== 409) return json(502,"newsletter_failed");
    return Response.json({ok:true,alreadySubscribed:!existing.data.unsubscribed});
   }
   if (!result.response.ok) return json(result.response.status === 429 ? 429 : 502,"newsletter_failed");
   return Response.json({ok:true});
  }
  const textField = (name:string) => typeof body[name] === "string" ? body[name].trim() : "";
  const name=textField("name"),organization=textField("organization"),subject=textField("subject"),message=textField("message");
  if (!name || name.length>120 || organization.length>160 || !["","Skole og elevprosjekt","Partnerskap og støtte","Generelt spørsmål"].includes(subject) || message.length<5 || message.length>5000) return json(400,"invalid_fields");
  if (!process.env.RESEND_FROM || !process.env.CONTACT_TO_EMAIL) return json(503,"email_not_configured");
  const text = `Fra: ${name}\nEpost: ${email}\nOrganisasjon: ${organization}\nTema: ${subject || "Annet"}\n\n${message}`;
  const result=await resend("/emails",{from:process.env.RESEND_FROM,to:[process.env.CONTACT_TO_EMAIL],reply_to:email,subject:`Nettsidehenvendelse: ${subject || "Generelt spørsmål"}`,text,html:`<h2>Ny henvendelse fra nettsiden</h2><p>${escapeHtml(text).replace(/\n/g,"<br>")}</p>`});
  if (!result.response.ok) return json(result.response.status === 429 ? 429 : 502,"contact_failed");
  return Response.json({ok:true});
 } catch {
  return json(502,kind === "newsletter" ? "newsletter_failed" : "contact_failed");
 }
}

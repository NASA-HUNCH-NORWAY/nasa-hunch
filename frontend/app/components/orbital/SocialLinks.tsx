import { site } from "@/app/lib/site";

/** Lenker til sosiale medier. Profiler uten adresse hoppes over. */
export function SocialLinks({ className = "social-links" }: { className?: string }) {
 const profiles = site.socials.filter((profile): profile is { name: string; url: string } => Boolean(profile.url));
 if (!profiles.length) return null;
 return <nav className={className} aria-label="Sosiale medier">
  {profiles.map(profile => <a key={profile.name} href={profile.url} rel="noopener noreferrer" target="_blank">{profile.name}<span className="visually-hidden"> (åpnes i ny fane)</span></a>)}
 </nav>;
}

import Image from "next/image";

/*
 * A NASA photograph behind a section, faded into space black. The variant sets
 * where the picture sits: full (behind everything), right or left (a panel
 * beside the text), or band (a strip along the top). Decorative unless `alt`
 * is given; the credit is set small in the corner.
 */
export type BackdropImage = "earthset" | "lunar-surface" | "lunar-limb" | "launch" | "orion-pad-moon" | "ball-clamp-iss";

const sources: Record<BackdropImage, { src: string; width: number; height: number; credit: string }> = {
 "earthset": { src: "/assets/artemis/earthset.jpg", width: 1920, height: 1280, credit: "Jorda går ned bak Månen, sett fra Orion under Artemis II, april 2026. Foto: NASA" },
 "lunar-surface": { src: "/assets/artemis/lunar-surface.jpg", width: 1920, height: 1280, credit: "Månens overflate fra Orion, Artemis II. Foto: NASA" },
 "lunar-limb": { src: "/assets/artemis/lunar-limb.jpg", width: 1920, height: 1280, credit: "Månens kant fra Orion, Artemis II. Foto: NASA" },
 "launch": { src: "/assets/artemis/launch.jpg", width: 1920, height: 1280, credit: "Artemis II skytes opp, 1. april 2026. Foto: NASA" },
 "orion-pad-moon": { src: "/assets/artemis/orion-pad-moon.jpg", width: 1920, height: 1280, credit: "Månen bak Artemis II på oppskytingsrampen. Foto: NASA" },
 "ball-clamp-iss": { src: "/assets/ball-clamp-iss.jpg", width: 2200, height: 1466, credit: "Stephen Bowen klargjør kamerafestet for testing på ISS. Foto: NASA" },
};

export function Backdrop({ image, variant = "full", position = "50% 50%", alt = "", priority = false, credit = true }: { image: BackdropImage; variant?: "full" | "right" | "left" | "band"; position?: string; alt?: string; priority?: boolean; credit?: boolean }) {
 const s = sources[image];
 return <figure className={`ar-backdrop ar-backdrop-${variant}`} aria-hidden={alt ? undefined : true}>
  <Image src={s.src} width={s.width} height={s.height} alt={alt} priority={priority} sizes={variant === "full" || variant === "band" ? "100vw" : "(max-width: 860px) 100vw, 50vw"} style={{ objectPosition: position }} />
  {credit && <figcaption>{s.credit}</figcaption>}
 </figure>;
}

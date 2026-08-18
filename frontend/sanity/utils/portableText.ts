import type { PortableText } from "@/sanity/types";

export function portableTextToPlainText(blocks: PortableText = []) {
  return blocks
    .map((block) => block.children?.map((child) => child.text).join("") ?? "")
    .filter(Boolean)
    .join("\n\n");
}

/** Hvert tekstblokk som eget avsnitt, klart til å rendres som <p>. */
export function portableTextToParagraphs(blocks: PortableText | null = []) {
  return (blocks ?? [])
    .map((block) => block.children?.map((child) => child.text).join("") ?? "")
    .map((text) => text.trim())
    .filter(Boolean);
}

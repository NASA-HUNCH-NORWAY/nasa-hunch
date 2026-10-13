/*
 * Pil tegnet som SVG. Tegn som ↗ og ↓ vises som fargede emoji på mange
 * telefoner, så pilene tegnes i stedet, i samme farge som teksten.
 */
const paths = {
  "up-right": "M4.5 11.5 11.5 4.5M5.5 4.5h6v6",
  down: "M8 3v10M3.5 8.5 8 13l4.5-4.5",
  up: "M8 13V3M3.5 7.5 8 3l4.5 4.5",
} as const;

export function Arrow({ dir = "up-right", className }: { dir?: keyof typeof paths; className?: string }) {
 return <span aria-hidden="true" className={className ? `arrow ${className}` : "arrow"}>
  <svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d={paths[dir]} /></svg>
 </span>;
}

---
name: NASA HUNCH Norge
description: From the workshop to the Moon. Norwegian students build hardware to NASA specification, told through the Artemis II photographs.
colors:
  space-black: "#050508"
  panel-black: "#0b0c10"
  moon-white: "#f2f1ee"
  regolith-muted: "#a9a69f"
  hairline-dark: "#ffffff1c"
  core-stage-orange: "#e8833a"
  aluminium: "#dcdde1"
  aluminium-shade: "#c9cbd1"
  aluminium-ink-muted: "#45434f"
  aluminium-hairline: "#13111930"
  earth-blue: "#5b8fd1"
  lunar-grey: "#8f8b84"
  graphite: "#16171c"
  graphite-hover: "#22232a"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(58px, 9.4vw, 156px)"
    fontWeight: 680
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 122"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 66px)"
    fontWeight: 680
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 120"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 680
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 110"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.55vw, 21px)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0"
  readout:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "clamp(26px, 2.8vw, 40px)"
    fontWeight: 400
    lineHeight: 1.1
  mono-small:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
rounded:
  hairline: "2px"
  full: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(104px, 10vw, 160px)"
  plate: "clamp(88px, 11vw, 150px)"
  masthead: "max(560px, calc(88svh - 76px - 55px))"
  header: "76px"
  shell: "min(1320px, calc(100% - 2 * clamp(20px, 4vw, 56px)))"
components:
  button-primary:
    backgroundColor: "{colors.aluminium}"
    textColor: "{colors.space-black}"
    rounded: "{rounded.hairline}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.space-black}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.moon-white}"
    rounded: "{rounded.hairline}"
    padding: "0 22px"
    height: "52px"
  button-line-hover:
    backgroundColor: "#ffffff14"
  nav-contact:
    backgroundColor: "{colors.aluminium}"
    textColor: "{colors.space-black}"
    rounded: "{rounded.hairline}"
    padding: "0 18px"
    height: "44px"
  aluminium-plate:
    backgroundColor: "{colors.aluminium}"
    textColor: "{colors.space-black}"
    padding: "{spacing.plate} 0"
  panel:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.moon-white}"
  photo-credit:
    textColor: "#ffffffa6"
    typography: "{typography.label}"
---

# Design System: NASA HUNCH Norge

## Overview

**Creative North Star: "From the workshop to the Moon"**

The site takes its world from the Artemis II photographs and from the one line that matters: the free-return trajectory Artemis II flew around the Moon and home. A school year in HUNCH is told as that mission. Space black is the ground; the colour lives in the NASA pictures laid behind sections and faded into black. Against that, brushed aluminium stands for the hardware the students make: light panels, the programme masthead, the primary button. Core-stage orange appears only where something is happening now.

The voice is wide, heavy Archivo (width axis 120 to 122, weight 680) set large and tight, with plain Norwegian copy in the same family. Martian Mono is reserved for numbers: measurements, dates, figure readouts and Op numbers. Density is low; sections are tall, each carries one heading, and pictures are allowed to fill the viewport. Nothing animates on arrival; the one motion is Orion flying the trajectory as the reader scrolls.

This world replaces the earlier violet "Machined Orbit/Verksted" system (2026-10-20). Decorative orbits, starfields and invented space graphics are rejected: every picture is a real NASA photograph and every drawn line is a real path.

**Key Characteristics:**
- Real NASA photographs as the only imagery, each credited "Foto: NASA"; NASA and Artemis logos never used.
- Space black ground, dark panels, photographs faded in with linear gradients.
- Brushed aluminium (#dcdde1 to #c9cbd1 with fine horizontal streaks) as the hardware material.
- Orange only for "now".
- Archivo wide for voice, Martian Mono only for numbers.
- 2px corners, 1px hairlines, no shadows, no intro animation.

## Colors

A near-monochrome night palette whose colour comes from the photographs, with one metal and one signal.

### Primary
- **Brushed Aluminium** (aluminium to aluminium-shade): the hardware. Light plates, the Programmet masthead, the Skoler and Programmet light sections, and the primary button. Plates carry the vertical gradient plus fine horizontal streaks (see Elevation & Depth). Text on aluminium is space black, with the aluminium muted ink for secondary text and the aluminium hairline for dividers.

### Secondary
- **Core-Stage Orange** (core-stage-orange): the "now" signal. Orion's position on the trajectory and its ring, the current phase marker in the school-year cycle and its "Nå" tag. Nothing else.

### Tertiary
- **Earth Blue** (earth-blue) and **Lunar Grey** (lunar-grey): exist only inside the photographs and the trajectory art (the Earth and Moon discs in the mission drawing). Never used for UI, text or fills.

### Neutral
- **Space Black** (space-black): page ground, header, contact band, footer, and the colour every photograph fades into.
- **Panel Black** (panel-black): one step up for alternating sections (`.paper` on subpages, the partner contribution section, the launch copy panel).
- **Moon White** (moon-white): headings and body text, trajectory "flown" line, phase dots once reached, focus outline.
- **Regolith Muted** (regolith-muted): leads, secondary copy, phase subtitles.
- **Dark Hairline** (hairline-dark): 1px dividers on dark; header and band rules use #ffffff14, readout dividers #ffffff26 to #ffffff40.
- **Graphite** (graphite / graphite-hover): legacy hover and fill slots kept under their old variable names; quiet dark fills only.

### Named Rules
**The Photograph Owns the Colour Rule.** Blue, grey and warm tones come from the NASA pictures. The interface itself stays black, white, aluminium and one orange.

**The Now Rule.** Core-stage orange marks the current position in time (Orion, the current school-year phase) and nothing else.

## Typography

**Display Font:** Archivo with the wdth axis (with Helvetica Neue, Arial)
**Body Font:** Archivo (same family)
**Label/Mono Font:** Martian Mono (with ui-monospace)

**Character:** One wide, heavy grotesque does all the talking, stretched to width 120 to 122 for headings so they read like stencilled hardware lettering; the mono is an instrument readout, never a voice.

### Hierarchy
- **Display** (680, clamp(58px, 9.4vw, 156px), 0.96, wdth 122): front-page hero only ("Fra verkstedet til Månen."), max 11ch. Phones under 600px set it at 11.6vw. Subpage h1 is clamp(42px, 5.6vw, 84px); the Om cover h1 goes to clamp(56px, 9vw, 148px).
- **Headline** (680, clamp(34px, 4.4vw, 66px), 0.98, wdth 120): section h2. On the front page h2 grows to clamp(40px, 5.6vw, 92px); contact band clamp(40px, 5.2vw, 80px). Usually held to 9 to 11ch with deliberate line breaks.
- **Title** (680, 24px, 1.2, wdth 110): h3; in the Op plate h3 grows to clamp(28px, 2.8vw, 42px).
- **Lead** (400, clamp(18px, 1.55vw, 21px), 1.65): max 560px, muted on dark, #2f2d38 on aluminium.
- **Body** (400, 18px, 1.6).
- **Label** (400, 14px, sentence case, no tracking): captions, fact terms, readout terms, photo credits (12.5px).
- **Readout / Op** (Martian Mono, clamp(26px, 2.8vw, 40px) for figure numbers; 12.5px for Op 10/20/30; 13px for phase months in the trajectory).

### Named Rules
**The Numbers-Only Mono Rule.** Martian Mono sets measurements, dates, figure readouts and Op numbers. Words stay in Archivo.

**The Label Below Rule.** Labels sit below their headings, in sentence case at 14px. No small uppercase labels above headings; one heading per section.

**The Plain Separator Rule.** Visible text uses no em dash or middle dot as separators (docs/ORBITAL_REDESIGN.md, Designregler).

## Layout

Content sits in a shell of min(1320px, 100% minus two gutters), widened to 1360px on the front page; the gutter is clamp(20px, 4vw, 56px). Photographs break out to full bleed with `calc(50% - 50vw)`.

Rhythm: the front-page hero fills the viewport below the 76px header. Subpage mastheads open at about 88svh (max(560px, 88svh minus header minus 55px); 78svh base under 860px) and align their content to the bottom, except the deliberately short ones: Teamet and Personvern (clamp(80px, 10vw, 140px) top), the Programmet aluminium masthead and the Fagcase intro whose case index must land in the first viewport. Standard section padding is clamp(104px, 10vw, 160px) with a min-height of min(76svh, 760px), content centred. The contact band is a chapter of its own: same padding, at least 64svh, space black with a top hairline.

Two-column heads (heading left, lead right, bottom-aligned) are the default split; the launch section is a 1.15fr photo beside a 1fr panel; the school and partner paths split 50/50 with a hairline between. Below 860px every split stacks to one column and side photographs become a bottom band (about 44 to 48% of the section) with the copy padded above it.

Page compositions: Om has a full lunar-limb cover with a centred heading; Programmet an aluminium masthead holding Op 10/20/30; Skoler the Orion-on-the-pad photo as a right panel; Partnere the launch as a right panel; Fagcase the lunar surface as a top band; Teamet and Personvern short mastheads with no picture; Prosjektet the ISS photo as masthead; Kontakt Earthset as a right panel.

## Elevation & Depth

Flat. There are no drop shadows. Depth comes from three things: photographs set behind content (z-index -1) and dissolved into space black with linear gradients; the step from space black to panel black; and the brushed-aluminium plates, which read as a physical material through a 180deg #dcdde1 to #c9cbd1 gradient overlaid with repeating 1px horizontal streaks and one soft 100deg highlight band. The only ring-like effect is the 5px orange halo (#e8833a33) around the current school-year phase.

### Named Rules
**The Fade to Black Rule.** Every photograph ends in space black on its open sides: top and bottom for full covers, toward the text for side panels, a mask to transparent for bands.

**The Metal Is Material Rule.** Aluminium always carries its gradient and streaks on plates; it is never a flat grey card.

## Shapes

Corners are 2px everywhere a corner shows (buttons, inputs). Dividers are 1px hairlines. The only circles are functional: 11px phase and Op dots, the 7px trajectory phase marks, Orion (6px) and its 14px ring. The only drawn line is the Artemis II free-return trajectory: dashed 1.5px at #ffffff55 for the path ahead, solid 2px moon white for the part flown. The FAQ marker is a 14px plus built from two 1px hairlines that rotates 45deg when open.

## Components

### Buttons
Hardware you could pick up: one family, aluminium first, a line sibling second.
- **Shape:** squared off (2px), at least 52px tall, label left and arrow right (space-between, 18px gap), weight 650 at 16px.
- **Primary:** aluminium with space black text, 0 22px padding. Used for the main action ("For skoler", form submit, newsletter).
- **Hover / Focus:** background goes to pure white over 0.2s; focus outline is moon white.
- **Line:** transparent with a 1px inset #ffffff66 ring and moon white text; hover fills #ffffff14. Used for the quieter second path ("Bli partner", "Ta kontakt om støtte").
- **Text link:** underlined with a 1px rule, arrow trailing, 16px.

### Cards / Containers
- **Corner Style:** none worth naming; sections and plates are full-width bands, not cards.
- **Background:** space black, panel black, or brushed aluminium.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px hairlines between items (offer lists, team people, articles, case index cells).

### Inputs / Fields
- **Style:** 1px border, 2px radius, dark fill, 12px 14px padding, 15px text. Inherited from the legacy stylesheet; not yet re-specified for this world.

### Navigation
- Space black header, 76px tall, #ffffff14 bottom hairline, 84px logo. Links at 15px with 28px gaps; the current page is marked with a 1px moon-white underline (inset shadow), never colour. "Kontakt" is a 44px aluminium button.

### Photograph Backdrop (signature)
A NASA photograph behind a section in one of four placements: full (behind everything, faded top and bottom), right or left (a half-width panel faded toward the text), band (a strip across the top 64% masked to transparent). The credit sits bottom right in 12.5px Archivo at #ffffffa6, max 36ch, always ending "Foto: NASA". Decorative unless given alt text.

### Mission Path (signature)
The Artemis II free-return trajectory drawn from Earth around the Moon and home in a sticky 100svh stage inside a 320svh scroll track (280svh under 860px). As the reader scrolls, Orion (orange dot with ring) flies the line, the flown part draws in, and each of four school-year phases (Høst, November, Februar, Vår) lights up when reached. Month in mono orange, title 22px Archivo 650, subtitle 15px muted. With reduced motion the whole flight shows at once. Under 600px the in-drawing labels hide and the phases read as a list with a hairline spine below the drawing.

### Operations Plate
On aluminium: three columns Op 10 / Op 20 / Op 30 under a space-black top rule, each with an 11px black dot sitting on the rule, the Op number in 12.5px mono, an h3, and a 30ch paragraph. Stacks to a vertical spine on phones.

### Surface Readout
Three figure readouts under a #ffffff40 rule: the number in mono (clamp(26px, 2.8vw, 40px)) with its Archivo term below, divided by 1px hairlines. Set over a greyscaled, darkened lunar-surface photograph.

### Year Cycle
A vertical 1px spine with 11px moon-white dots; the current phase dot is orange with a 5px #e8833a33 halo and a "Nå" tag in orange.

### FAQ
Disclosure rows in the hairline language with the plus marker at the right.

## Do's and Don'ts

### Do:
- **Do** use only real NASA photographs, credited "Foto: NASA", with provenance recorded in frontend/public/assets/artemis/SOURCES.md.
- **Do** fade every photograph into space black (#050508) on its open sides.
- **Do** use brushed aluminium (#dcdde1 to #c9cbd1 with fine horizontal streaks) for light panels, the Programmet masthead and the primary button.
- **Do** keep orange (#e8833a) for "now": Orion's position and the current school-year phase.
- **Do** set Op 10/20/30, dates, measurements and figure numbers in Martian Mono, and everything else in Archivo.
- **Do** keep mastheads at about 88svh (short only for Teamet, Personvern, the Programmet aluminium masthead and the Fagcase index), sections at clamp(104px, 10vw, 160px), and the contact band as its own chapter.
- **Do** put labels below headings, in sentence case, with one heading per section.
- **Do** keep corners at 2px and dividers at 1px.

### Don't:
- **Don't** use NASA or Artemis logos.
- **Don't** draw decorative orbits, starfields or invented space graphics; the only drawn line is the real Artemis II trajectory, and the only drawn bodies are its Earth and Moon endpoints.
- **Don't** use Earth blue or lunar grey in UI; they belong to photographs and trajectory art.
- **Don't** use orange for emphasis, links, hovers or decoration.
- **Don't** add intro animations or reveal effects on arrival.
- **Don't** use em dashes or middle dots as separators in visible text, or small uppercase labels above headings.
- **Don't** add drop shadows or rounded cards.

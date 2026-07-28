# Nicole Brener Digital — Design System

Nicole Brener Digital is a personal brand / one-person marketing consultancy run by Nicole Brener (Argentina, Spanish-language). She works across marketing, AI ("IA"), content and strategy, and publishes a **central link-hub website** ("todo lo que hago, en un solo lugar") that fans out to her separate portfolio, services, free courses/resources, Amazon storefront and newsletter sign-up.

**Sources used to build this system:**
- GitHub repo: [nicolebrener/allofmywebsites](https://github.com/nicolebrener/allofmywebsites) — the live source of the hub site (`index.html`, `styles.css`, `script.js`, `assets/`). Explore it further for the exact production markup and any future updates.
- Uploaded reference: the user's own `index.html` draft of the hub (matches the GitHub repo almost 1:1 — confirms the repo as ground truth).
- `uploads/Brand-Book-Nicole-Brener.pdf`: the official brand book — source of truth for the current 5-color palette, Clash Display/General Sans typography, the thick-rounded-keyline signature, and Instagram cover-plate rules. Superseded the earlier ad-hoc palette/fonts and retired the sky-blue/sunflower accents.
- Uploaded mood image (`0da03d30c8f747a1e6924aae985d2c40.jpg`): a mocktail-brand ("Mellow") landing page used only as a loose visual-mood reference (bold rounded display type, sticker decorations, pill badges, thick outlines) — none of its actual brand marks, logo, or copy were copied; NB's own site already carries this energy independently.
- A second uploaded image (`Agregar un título (1).png`) could not be read — its filename uses a Unicode combining-accent character the file tools couldn't resolve. Please re-upload it with a plain-ASCII filename if it should inform this system.

## Index
- `styles.css` — global stylesheet entry (imports everything below)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `assets/` — `logo.gif` (animated avatar mark), `sticker-hello.png`, `sticker-sparkle.png`
- `components/` — reusable primitives, grouped `brand/`, `content/`, `forms/`, `navigation/`
  - **Logo** (brand) — avatar mark + wordmark
  - **Badge** (content) — pink pill label
  - **LinkCard** (content) — big color-block outlined link tile
  - **Button** (forms) — solid/outline CTA button
  - **NewsletterForm** (forms) — name+email capture with success state
  - **MarqueeBanner** (navigation) — scrolling olive ticker
  - **SocialIconButton** (navigation) — round dark social icon chip
- `ui_kits/link-hub/` — full interactive recreation of the hub homepage (`index.html`, `HomeScreen.jsx`, `README.md`)
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand motifs, iconography)
- `SKILL.md` — portable skill file for use in Claude Code

## Intentional additions
No component library exists in the source (it's a single static landing page), so this system authors a small standard set sized to what a link-hub site actually needs — not a generic app kit. Every primitive here (Logo, Badge, LinkCard, Button, NewsletterForm, MarqueeBanner, SocialIconButton) traces directly to a real element already on the live page; nothing was invented beyond factoring it into reusable pieces.

## Content fundamentals
- **Language & voice:** Spanish (Argentina), informal "vos" register throughout ("todo lo que hago", "sumate", "contactame acá", "sos parte de la comunidad"). Direct address, first person from Nicole ("me gustaría", "lo que uso y recomiendo").
- **Casing:** Sentence case for body copy and card descriptions; headline case only for the nav ticker (all-caps section labels: "PORTFOLIO", "SERVICIOS"). No ALL-CAPS elsewhere.
- **Tone:** Warm, confident, low-key funny — "Sin spam, lo prometo." / "Hecho con estrategia y mucho café." Short declarative sentences, no corporate jargon.
- **Structure:** Copy is scannable — a bold headline, one supporting sentence, one short CTA per block ("Ver proyectos →"). Every link card follows title → one-line description → arrow CTA.
- **Emoji:** Not used. Punctuation does the emotional work instead (¡exclamations!, → arrows).
- **CTAs:** Always a short verb phrase + arrow: "Ver servicios →", "Ver lista →", "Sumarme".

## Visual foundations
- **Palette:** Five colors, no more, per the official brand book (`uploads/Brand-Book-Nicole-Brener.pdf`) — hueso `#f1ecdf` (base bg, constant), tinta `#1b1815` (text/border/keyline, constant), terracota `#bc4b2e` (hero accent, ~45% of color plates), oliva `#5e6031` (serious tone: consulting/services/B2B), rosa malva `#e6a2c1` (closeness: courses/lifestyle, use ~20%), plus blanco tarjeta `#faf7f0` as the neutral card surface. Only one saturated accent block per screen/card — never two fighting each other, and never terracota + rosa touching directly.
- **Retired:** the earlier sky-blue (`#99b7f5`) and sunflower-yellow (`#fcca59`) secondary accents are retired per the brand book (kept struck-through in the "Retired Colors" guideline card for history) — sky blue in particular clashes with the warm-earth palette and is explicitly banned as a background.
- **Type:** Clash Display (display, weights 600/700, sentence case, max 6 words per headline) for all headlines/titles/nav wordmark; General Sans (body, 400/500 for copy, 700 reserved for buttons/CTAs/labels) for everything else. Both are free fonts from fontshare.com. Big fluid `clamp()` headline sizes (32–58px hero).
- **Spacing:** Loose, breathing layout; ad-hoc-but-consistent values (8/12/14/16/20/24/26/32/36/40/48/52/56px) rather than a strict 4/8 grid — tokenized as-is, not rounded to a framework default.
- **Backgrounds:** Flat solid color blocks only — no photography, no gradients, no repeating textures/patterns. Hand-drawn sticker PNGs (a "hello" script word, a sparkle cluster, a pink binder clip, a coral starburst, a blue gingham-check swatch, a yellow curved arrow) are the only illustrative imagery, absolutely-positioned and rotated a few degrees for a scrapbook feel.
- **Animation:** One motion motif — an infinite-loop horizontal marquee/ticker (22s linear) in the nav-adjacent strip. No other transitions, fades, or bounces anywhere on the page.
- **Hover / press states:** Links go from terracota to oliva on hover — no underline change. No visible press/active state defined (static color blocks).
- **Borders:** Signature thick **3px solid ink border with rounded corners** around every card, the nav, the marquee strip, and the footer divider — this keyline IS the brand mark per the brand book ("se sepa que la placa es tuya, sin leer"). Never a soft 1px hairline.
- **Shadows:** No card shadows at all (the border does the separating work). The only shadow used is a soft drop-shadow under the two sticker PNGs (`0 6px 10px rgba(0,0,0,0.2)`).
- **Corner radii:** 10px inputs/buttons, 12px success banner, 20px link cards, 24px newsletter panel, full pill (999px) for badges/CTAs, perfect circle for the avatar and social icon chips — no sharp corners on interactive elements.
- **Transparency / blur:** Not used — every surface is a flat opaque color.
- **Imagery color vibe:** N/A — no photography in the source; only flat vector-style stickers in warm orange/brown line art.
- **Cards:** Flat candy-colored rectangles, 3px ink border, 20px radius, no shadow, title top-left in Clash Display bold, description + arrow CTA bottom.

## Iconography
- No icon font or third-party icon set. The three social icons (Instagram, TikTok, LinkedIn) are small hand-drawn inline SVGs in a consistent 1.8px outline-stroke style, sitting on solid ink-colored circular chips (52×52px). Emoji and unicode symbols are not used as icons anywhere. If more icons are needed, match this exact outline-stroke weight rather than pulling in a filled icon library.

## Fonts
Both typefaces (Clash Display, General Sans) are free fonts from fontshare.com, loaded live via the Fontshare CSS API (`tokens/typography.css` `@import`) — no local font files needed.

## Caveats / help wanted
- One uploaded reference image (`Agregar un título (1).png`) couldn't be read due to a filename encoding issue — please re-upload with a plain filename if it's relevant.
- No standalone logo/SVG exists — the brand mark IS the animated avatar gif; if a static logo ever gets made, drop it into `assets/` and this system can add it as an alternate to `Logo`.
- This is a single-page personal site, so the component set is intentionally small. If Nicole builds out the separate Portfolio, Servicios, or Cursos sites referenced by the hub, those would each warrant their own UI kit here — happy to build those next if you share their source.

**Please help me iterate!** Tell me what's off — palette balance, a component that doesn't match production, copy tone that needs adjusting — and I'll refine it.

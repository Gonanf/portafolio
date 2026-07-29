# Gabriel Solotorevsky — Software Engineer (autoproclaimed)

## Brief and audience

Portfolio that sells technical depth through visual intensity. Every interaction should feel like the system is alive — responsive, tactile, slightly chaotic in a controlled way. The audience is technical collaborators and clients who need to immediately understand that they're dealing with someone who builds at the kernel/agent/compiler level.

Tone: self-aware, confident, playful. "Autoproclaimed" in the title is a quiet joke, not a disclaimer.

## Palette

### Dark mode (default)
- **Canvas:** `#292722` (softened umber — not black, not cold)
- **Paper / surface:** `#3a3530` (one step up from canvas)
- **Ink:** `#f7f0e4` (warm off-white)
- **Muted:** `#a09880` (warm gray)
- **Line:** `color-mix(in srgb, var(--ink) 15%, transparent)`

### Light mode
- **Canvas:** `#f2ede2`
- **Paper:** `#fffaf1`
- **Ink:** `#313c36`
- **Muted:** `#6f746c`
- **Line:** `color-mix(in srgb, var(--ink) 16%, transparent)`

### Accents
- **Signal (green):** `#b7ff4a` / light `#a6ec43`
- **Violet:** `#8b5cf6`
- **Blue:** `#38bdf8` (sparingly, for 3D/particle accent)

### Rules
- **No static gradients** on cards or sections. If a gradient is used, it must be interactive or animated (mouse-follow, scroll-driven).
- **No button circles.** The current design uses circular theme/locale toggles. Replace with rounded-rect minimal buttons (ShadCN `Button` with `variant="ghost"` or `outline`, customized).
- **No pure black** (`#000`) anywhere.
- Both modes use warm undertones rather than cold. Dark feels like a lit workshop at night; light feels like paper on a wooden desk.

## Typography

- **Display:** High-contrast system serif (Georgia), fluid `clamp()` sizing. Used for headings, hero text, timeline labels.
- **Interface:** JetBrains Mono Variable (monospace). Used for body text, tech tags, navigation.
- **Rhythm:** 4px spacing base. Vertical rhythm uses multiples of 4px.

## Layout

- **Single-page index** with hero → 3–4 project cards (grid) → contact CTA.
- **Timeline page** (`/sobre`): full-viewport horizontal timeline, single long-scroll page.
- **Contact page**: as-is, minimal.
- **No blog page** implemented; if linked, return 404 or redirect to home.
- Cards/sections use flat surfaces with possible 1px border. **No layered paper effects** (no asymmetric corners, no dashed/hand-drawn edges, no tinted shadows). Cleaner, more technical.

## Interactions and motion

### Hero — The Eye (improved motion-field)
- Three.js scene or enhanced AnimeJS: the "eye" from the current design made more aggressive.
- Particle field responding to pointer, with magnetic displacement cascade (far nodes follow mouse with delay).
- Throbbing/pulsing scale animation (sinusoidal tween, not just stagger).
- More nodes (10–12 `[data-orbit]` elements), larger displacement range (up to 80px).
- On hover, nodes "look at" the cursor. On click/mousedown, nodes scatter and recover.
- Motion respects `prefers-reduced-motion`.

### Project cards → Modal
- 3–4 featured projects as cards in a grid. Clean, minimal, no hover chaos.
- Click → `<ProjectModal>` (ShadCN `Dialog` / custom). Animated entry: scale 0.95→1 + opacity fade.
- Inner content scrolls if overflow.
- Modal backdrop closes on click-outside or Escape.

### Timeline (page: /sobre)
- Full-viewport horizontal timeline. SVG `<path>` with an organic/irregular curve (not straight).
- **Hybrid interaction:** mouse wheel scroll + drag (AnimeJS `createDraggable`).
- Nodes appear one by one as scrolled into viewport (scroll-driven reveal).
- Each node connects to the main line via animated dashed SVG line (`stroke-dasharray`, drawn with AnimeJS `createDrawable`).
- Node size varies: larger = more important milestones.
- Click → node expands into a small card replacing the circle. Smooth swap animation (AnimeJS `animate`).
- Some nodes are positioned above the line, some below, in a "messy but deliberate" rhythm.

### Particles / atmosphere
- Three.js particle system in the hero background (not canvas — Three.js) for subtle floating light points.
- Optional: Three.js on the timeline page for ambiance.

### Scroll-driven entrances
- Section titles use split-text reveal (AnimeJS `splitText` utility or manual letter-by-letter).
- Cards fade + translate up on viewport entry.
- All section scroll rigging uses `IntersectionObserver` + AnimeJS `.then()` chain.

## Components

### ShadCN usage
- **`Button`** — variant `ghost` or `outline`, customized with the palette (no round buttons). Used for: navigation links, contact CTA, locale toggle, theme toggle.
- **`Dialog`** — base for ProjectModal (custom animated overlay).
- **`Separator`** — if needed for layout dividers.
- **`Drawer`** — keep the current mobile drawer but fix the i18n/hardcoded-text bugs and use `Button` for trigger.

All ShadCN components get palette overrides via CSS variables (no default shadcn dark-mode theme — use the palette above).

### Custom components
- `MotionField` — enhance existing, add Three.js particle overlay (optional layer, not replacement).
- `ProjectCard` — simpler than current, no grayscale hover.
- `ProjectModal` — ShadCN `Dialog` wrapper, scrollable content.
- `Timeline` — whole-page SVG + React state + AnimeJS orchestration.
- `Header`, `Footer` — as-is, but replace circular buttons with ShadCN Button.

## Data

Project data lives in `apps/web/src/content/portfolio.ts`. Add optional `detail: LocalizedText` and `techStack: string[]` fields for the modal. No visitor-facing copy belongs in templates unless it is structural UI text.

## Responsive

- Desktop: editorial composition, the eye at full scale, timeline horizontal.
- Tablet: grid simplifies, the eye shrinks, timeline becomes scrollable container.
- Mobile: single column, timeline flips to vertical (horizontal on small viewport is impractical).
- `prefers-reduced-motion` disables: cursor tracking, magnetic displacement, continuous animation, scroll choreography, Three.js particles. State changes remain (open/close, reveal).

## Accepted debt

- Three.js bundle is large (~150KB gzipped). Load it only on pages that need it (home hero, timeline).
- Timeline is a custom component with no off-the-shelf lib. Maintainable but not trivial.
- No blog page despite being linked from header. That's fine — it's aspirational linking.

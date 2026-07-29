# Gabriel Solotorevsky — Cinematic Developer System

## Brief and audience

An expressive bilingual portfolio for collaborators and clients evaluating Gabriel's software, automation, and infrastructure work. The surface feels like a digital film title: intentional, technical, and human rather than a generic SaaS dashboard.

## Visual tokens

- **Night:** `#09090b`; **paper:** `#f5f3ee`; **ink:** `#111113`; **mist:** `#a1a1aa`.
- **Signal:** `#b7ff4a`; **violet glow:** `#8b5cf6`; **cyan glow:** `#38bdf8`.
- Display type is a high-contrast system serif; interface type is JetBrains Mono. Use fluid `clamp()` display sizing and a 4px spacing rhythm.
- Dark surfaces use translucent charcoal, a one-pixel low-contrast outline, grain, and light bloom. Light mode becomes an editorial paper surface with ink and lime signal.

## Components and interaction

- `SiteHeader`, `SiteFooter`, `LocaleSwitcher`, and `ThemeToggle` are shared navigation primitives.
- `ProjectCard`, `StatusPanel`, and `SectionHeading` are content primitives. Repeated interaction uses shadcn Button, Drawer, Separator, and Sonner foundations.
- Anime.js motion communicates hierarchy: intro reveal, cursor-responsive art, magnetic CTAs, and scroll-triggered section entry. Animate only transform, opacity, and filter.

## Responsive and accessibility contract

- Desktop is an editorial composition; tablet simplifies grid density; mobile becomes a single readable column without horizontal overflow.
- Keyboard focus is always visible. Controls have text alternatives and semantic labels. Color is never the sole status signal.
- `prefers-reduced-motion` disables cursor tracking, magnetic displacement, continuous animation, and scroll choreography while retaining clear state changes.

## Content operations and accepted debt

Portfolio data lives in `apps/web/src/content/portfolio.ts`; no visitor-facing copy belongs in templates unless it is structural UI text. See `docs/content-authoring.md` for the editing workflow.

The existing Google Calendar embed remains third-party and may affect performance; it is loaded only on the contact route.

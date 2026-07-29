# Updating portfolio content

All editable portfolio information is in `apps/web/src/content/portfolio.ts`. Do not edit page templates to update copy, skills, projects, or current work.

## Add a project

Add an object to `portfolio.projects`. Give it a stable lowercase `slug`, a name, an image in `apps/web/public`, Spanish and English descriptions, tags, and optional `repository` or `website` URLs. Set `featured: true` to show it on the homepage.

```ts
{
  slug: "my-project",
  name: "My Project",
  image: "/my-project.svg",
  description: { es: "Descripción en español.", en: "English description." },
  tags: ["Astro", "Cloudflare"],
  repository: "https://github.com/example/my-project",
  featured: true,
}
```

## Change strengths, services, or current work

- Edit `portfolio.services` for the three service panels.
- Edit `portfolio.status` whenever you change what you are studying or building.
- Add a new localized field to this module before using it in a page. Every visitor-facing sentence needs both `es` and `en` values.
- Edit `portfolio.socials` for external profile links.

## Preview safely

Run `bun run dev` from the repository root. Review Spanish at `/` and English at `/en/`, then run `bun run typecheck` and `bun run build` before publishing.

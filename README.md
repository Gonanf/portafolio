# portafolio

> Proyecto de Gonanf — colección personal.
> **Lenguaje principal (GitHub):** Astro · **URL:** https://github.com/Gonanf/portafolio

## Qué es

Este repositorio forma parte de la colección de **Gonanf / Gabriel Solotorevsky** clonada en `/run/media/chaos/terciario/proyectos/portafolio`.

> **Nota:** README original preservado abajo en la sección "README original".

- **Path absoluto:** `/run/media/chaos/terciario/proyectos/portafolio`
- **Estado git:** último commit `2026-08-18 fix: drop /en prefix from blog redirect (no /en routes on subdomain)`
- **Archivos (aprox):** 165
- **Stack detectado:** Node.js / TypeScript (package.json) deps: —

## Stack

- Node.js / TypeScript (package.json) deps: —

## Estructura

```
portafolio/
.npmrc
.prettierignore
.prettierrc
DESIGN.md
README.md
apps/
  apps/blogs
  apps/web
bun.lock
docs/
  docs/content-authoring.md
  docs/github_repos.json
  docs/timeline-raw.md
package.json
packages/
  packages/ui
tsconfig.json
turbo.json
```

## Cómo correr

> Instrucciones genéricas según el stack detectado. Ajustar según el repo.

```bash
# instalar deps
bun install   # o npm install / pnpm install

# desarrollo
bun run dev   # o npm run dev

# build
bun run build
```

## Estado

- **Último commit:** `2026-08-18 fix: drop /en prefix from blog redirect (no /en routes on subdomain)`
- **Clonado en:** `/run/media/chaos/terciario/proyectos/portafolio`
- **Exclusiones del lote:** Forks, Workmatch, el-hornero-digital, mali/meli, Sherut (no tocados por consigna)

## Docs

- `docs/overview.md` — descripción extendida y guía rápida (generado en este lote)

## README original (preservado)

> Contenido previo de README.md recortado a 2000 chars para referencia:

```markdown
# Astro + React + TypeScript + shadcn/ui (Monorepo)

This is a monorepo template for Astro with React, TypeScript, and shadcn/ui.

## Structure

- `apps/web` - Astro application
- `packages/ui` - Shared UI components (shadcn/ui)

## Adding components

To add components, run the following command from the root:

```bash
npx shadcn@latest add button -c apps/web
```

## Using components

To use the components in your app, import them in an `.astro` file:

```astro
---
import { Button } from "@workspace/ui/components/button"
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro App</title>
  </head>
  <body>
    <div class="grid h-screen place-items-center content-center">
      <Button>Button</Button>
    </div>
  </body>
</html>
```

```

---
*README generado/mejorado automáticamente el 2026-09-04 con inspección de repo (opencode/agy pattern: lectura de estructura, lenguaje y entrypoints). No se modificó código, solo documentación.*
*Autor original: Gonanf — https://github.com/Gonanf/portafolio*

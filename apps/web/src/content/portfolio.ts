export const locales = ["es", "en"] as const

export type Locale = (typeof locales)[number]
export type LocalizedText = Record<Locale, string>

export type Project = {
  readonly slug: string
  readonly name: string
  readonly description: LocalizedText
  readonly detail: LocalizedText
  readonly tags: readonly string[]
  readonly techStack: readonly string[]
  readonly image: string
  readonly repository?: string
  readonly website?: string
  readonly featured: boolean
}

export type TimelineEntry = {
  readonly date: string
  readonly title: LocalizedText
  readonly description: LocalizedText
  readonly tags: readonly string[]
  readonly subItems?: readonly LocalizedText[]
}

export const portfolio = {
  name: "Gabriel Solotorevsky",
  role: {
    es: "Desarrollador de software que construye sistemas con intención.",
    en: "Software developer building systems with intention.",
  },
  introduction: {
    es: "Diseño experiencias web, automatizaciones e infraestructura que convierten ideas complejas en productos claros.",
    en: "I design web experiences, automations, and infrastructure that turn complex ideas into clear products.",
  },
  status: {
    label: { es: "Ahora", en: "Now" },
    title: { es: "Construyendo sistemas y explorando agentes", en: "Building systems and exploring agents" },
    detail: {
      es: "Profundizando en Rust, sistemas distribuidos, gráficos y agentes especializados.",
      en: "Going deeper on Rust, distributed systems, graphics, and specialized agents.",
    },
  },
  services: [
    { title: { es: "Experiencias web", en: "Web experiences" }, detail: { es: "Interfaces rápidas y expresivas con Astro, React y Vue.", en: "Fast, expressive interfaces with Astro, React, and Vue." } },
    { title: { es: "Automatización", en: "Automation" }, detail: { es: "Flujos confiables que eliminan trabajo repetitivo.", en: "Reliable flows that remove repetitive work." } },
    { title: { es: "Infraestructura", en: "Infrastructure" }, detail: { es: "Sistemas cloud-native, contenedores y operaciones Linux.", en: "Cloud-native systems, containers, and Linux operations." } },
  ],
  projects: [
    {
      slug: "kateto", name: "Kateto", image: "/kateto.svg", featured: true,
      description: { es: "Un ecosistema de agentes y herramientas para automatizar procesos con intervención humana.", en: "An ecosystem of agents and tools for human-in-the-loop automation." },
      detail: { es: "Explora agentes especializados, interfaces de revisión y herramientas que mantienen a las personas dentro de los puntos de decisión importantes.", en: "Explores specialized agents, review interfaces, and tools that keep people inside consequential decision points." },
      tags: ["LLM", "Agents", "Automation"], techStack: ["TypeScript", "LLMs", "Cloudflare", "Workflows"],
    },
    {
      slug: "pj", name: "pj", image: "/pj.svg", featured: true,
      description: { es: "Un CLI de diario de proyectos y flujo de trabajo para terminal, escrito en Go.", en: "A terminal-based project journal and workflow CLI written in Go." },
      detail: { es: "Llevá un registro de proyectos, tareas y notas directamente desde la terminal, con almacenamiento local y una estructura simple.", en: "Track projects, tasks, and notes directly from the terminal, with local storage and a simple structure." },
      tags: ["Go", "CLI", "Terminal"], techStack: ["Go", "TUI", "Git"], repository: "https://github.com/Gonanf/pj",
    },
    {
      slug: "el-hornero-digital", name: "El Hornero Digital", image: "/el-hornero-digital.svg", featured: true,
      description: { es: "Sitio web de agencia de desarrollo construido con Astro.", en: "Development agency website with Astro." },
      detail: { es: "La presencia web de una agencia de desarrollo: rápida, accesible y fácil de mantener.", en: "The web presence for a development agency: fast, accessible, and easy to maintain." },
      tags: ["Astro", "Web", "Agency"], techStack: ["Astro", "TypeScript", "Tailwind"], repository: "https://github.com/Gonanf/el-hornero-digital",
    },
    {
      slug: "sherut", name: "Sherut", image: "/sherut.svg", featured: true,
      description: { es: "Automatización de seguimiento de clientes y campañas con N8N y Astro.", en: "Client and campaign follow-up automation with N8N and Astro." },
      detail: { es: "Un sistema para convertir tareas comerciales repetitivas en flujos observables, consistentes y fáciles de ajustar.", en: "A system that turns repetitive commercial work into observable, consistent, and easy-to-adjust flows." },
      tags: ["N8N", "Astro", "Automation"], techStack: ["N8N", "Astro", "APIs", "CRM"],
    },
    {
      slug: "arcteto", name: "Arcteto", image: "/arcteto.svg", featured: true,
      description: { es: "Una distribución Arch Linux enfocada en eficiencia, desarrollo y herramientas personales.", en: "An Arch Linux distribution focused on efficiency, development, and personal tooling." },
      detail: { es: "Un entorno de trabajo reproducible que convierte decisiones de sistema, herramientas y flujo personal en una experiencia coherente.", en: "A reproducible working environment that turns system choices, tools, and personal workflow into one coherent experience." },
      tags: ["Linux", "Arch", "Systems"], techStack: ["Arch Linux", "Bash", "Systemd", "Git"], repository: "https://github.com/Gonanf/arcteto",
    },
  ] satisfies readonly Project[],
  timeline: [
    { date: "2026—Now", title: { es: "Freelancer Full Stack", en: "Freelance Full-Stack Developer" }, description: { es: "Diseño productos web, automatizaciones e infraestructura para clientes y proyectos propios.", en: "Designing web products, automations, and infrastructure for clients and personal projects." }, tags: ["Astro", "Cloudflare", "Automation"] },
    { date: "2026", title: { es: "Portafolio", en: "Portfolio" }, description: { es: "Este portafolio personal, construido con Astro, React y shadcn/ui.", en: "This personal portfolio, built with Astro, React, and shadcn/ui." }, tags: ["Astro", "React", "TypeScript"] },
    { date: "2025—2026", title: { es: "Kateto", en: "Kateto" }, description: { es: "Un ecosistema de agentes y herramientas para automatizar procesos con intervención humana.", en: "An ecosystem of agents and tools for human-in-the-loop automation." }, tags: ["LLM", "Agents", "Automation"] },
    { date: "2025", title: { es: "pj", en: "pj" }, description: { es: "Un CLI de diario de proyectos y flujo de trabajo para terminal, escrito en Go.", en: "A terminal-based project journal and workflow CLI written in Go." }, tags: ["Go", "CLI", "Terminal"] },
    { date: "2025", title: { es: "El Hornero Digital", en: "El Hornero Digital" }, description: { es: "Sitio web de agencia de desarrollo construido con Astro.", en: "Development agency website with Astro." }, tags: ["Astro", "Web", "Agency"] },
    { date: "2025", title: { es: "Sherut", en: "Sherut" }, description: { es: "Construí automatizaciones de seguimiento de clientes y campañas.", en: "Built client and campaign follow-up automations." }, tags: ["N8N", "Astro", "Automation"] },
    { date: "2025", title: { es: "Técnico en Programación", en: "Programming Technician" }, description: { es: "Graduado con promedio 10/10 y participación en experiencias de innovación y programación.", en: "Graduated with a 10/10 average and active in innovation and programming experiences." }, tags: ["Education", "INET", "UNSAM"] },
    { date: "2025", title: { es: "Siscod", en: "Siscod" }, description: { es: "Sistema de gestión de stock y ventas para un comercio de tintas.", en: "Stock and sales management system for an ink shop." }, tags: ["Web", "Inventory", "Business"] },
    { date: "2024—2025", title: { es: "Ocicat", en: "Ocicat" }, description: { es: "Sistema de biblioteca de ámbito didáctico para gestionar el catálogo y los préstamos.", en: "Didactic library system for managing the catalog and loans." }, tags: ["Education", "Library", "Systems"], subItems: [{ es: "Ocicat Bella", en: "Ocicat Bella" }] },
    { date: "2024—2025", title: { es: "Gabinator Remaster", en: "Gabinator Remaster" }, description: { es: "Segunda versión del sistema de screen sharing, ahora para Android, Windows y Linux.", en: "Second version of the screen sharing system, now for Android, Windows, and Linux." }, tags: ["Android", "Windows", "Linux", "Networking"] },
    { date: "2024—2026", title: { es: "Arcteto", en: "Arcteto" }, description: { es: "Diseñé una distribución Arch Linux enfocada en eficiencia, desarrollo y herramientas personales.", en: "Designed an Arch Linux distribution focused on efficiency, development, and personal tooling." }, tags: ["Linux", "Arch", "Systems"] },
    { date: "2024", title: { es: "Backshell", en: "Backshell" }, description: { es: "Cliente para herramientas de seguridad ofensiva en Windows.", en: "Client for offensive security tooling on Windows." }, tags: ["Security", "Windows", "Networking"] },
    { date: "2024", title: { es: "Pnshell", en: "Pnshell" }, description: { es: "Herramientas de seguridad ofensiva para Windows.", en: "Offensive security tooling for Windows." }, tags: ["Security", "Windows", "Networking"] },
    { date: "2024", title: { es: "Gabinator", en: "Gabinator" }, description: { es: "Sistema de screen sharing entre dispositivos Android y Windows.", en: "Screen sharing system between Android and Windows devices." }, tags: ["Android", "Windows", "Networking"] },
    { date: "2024", title: { es: "JJW", en: "JJW" }, description: { es: "Plataforma de mensajería con canales para conversaciones organizadas.", en: "Messaging platform with channels for organized conversations." }, tags: ["Web", "Messaging"] },
    { date: "2023", title: { es: "Raycasting Render SFML", en: "Raycasting Render SFML" }, description: { es: "Renderizador de ray casting en C++ con SFML, siguiendo el tutorial clásico de Lode.", en: "Ray casting renderer in C++ with SFML, following Lode's classic tutorial." }, tags: ["C++", "SFML", "Graphics"] },
    { date: "2023", title: { es: "A2C", en: "A2C" }, description: { es: "Lenguaje de programación creado junto a estudiantes de secundaria técnica.", en: "Programming language built with technical high school students." }, tags: ["Education", "Language", "Team"] },
    { date: "2018—2025", title: { es: "Aprendizaje autodidacta", en: "Self-directed learning" }, description: { es: "Profundicé en programación, Linux, diseño de sistemas y herramientas open source.", en: "Went deep on programming, Linux, systems design, and open-source tooling." }, tags: ["Linux", "Systems", "Open source"] },
  ] satisfies readonly TimelineEntry[],
  socials: [
    { label: "GitHub", href: "https://github.com/Gonanf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-solotorevsky-35524431b" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCllNy6G6V8WgzgXguloZYiw" },
  ],
} as const

export const ui: Record<Locale, Record<string, string>> = {
  es: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto", blog: "Blog", viewWork: "Ver proyectos", startProject: "Hablemos", services: "Lo que hago", selectedWork: "Trabajo seleccionado", readWriting: "Leer el blog", status: "Estado actual", menu: "Abrir menú", theme: "Cambiar tema", language: "Cambiar idioma", backHome: "Volver al portafolio" },
  en: { home: "Home", about: "About", projects: "Projects", contact: "Contact", blog: "Blog", viewWork: "View projects", startProject: "Let's talk", services: "What I do", selectedWork: "Selected work", readWriting: "Read the blog", status: "Current status", menu: "Open menu", theme: "Change theme", language: "Change language", backHome: "Back to portfolio" },
}

export function getLocale(value: string | undefined): Locale {
  return value === "en" ? "en" : "es"
}

export function route(locale: Locale, path = ""): string {
  const suffix = path.replace(/^\//, "")
  const prefix = locale === "en" ? "/en" : ""
  return suffix ? `${prefix}/${suffix}` : `${prefix}/` || "/"
}

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@workspace/ui/components/dialog"
import { Button } from "@workspace/ui/components/button"
import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react"
import type { Locale, Project } from "@/content/portfolio"

type ProjectGalleryProps = {
  readonly locale: Locale
  readonly projects: readonly Project[]
  readonly compact?: boolean
}

export function ProjectGallery({ locale, projects, compact = false }: ProjectGalleryProps) {
  return <div className={compact ? "project-grid project-grid-compact" : "project-grid"}>
    {projects.map((project, index) => <Dialog key={project.slug}>
      <DialogTrigger className={index === 0 && !compact ? "project-card project-card-featured" : "project-card"}>
        <span className="project-index">0{index + 1}</span>
        <img src={project.image} alt="" />
        <span className="project-tags">{project.tags.join(" · ")}</span>
        <strong>{project.name}</strong>
        <span className="project-description">{project.description[locale]}</span>
        <span className="project-open">{locale === "es" ? "Abrir proyecto" : "Open project"} <ArrowUpRightIcon aria-hidden="true" /></span>
      </DialogTrigger>
      <DialogContent className="project-modal" showCloseButton>
        <DialogHeader>
          <p className="eyebrow">{project.tags.join(" / ")}</p>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.detail[locale]}</DialogDescription>
        </DialogHeader>
        <div className="project-modal-tech" aria-label="Technology stack">
          {project.techStack.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-modal-actions">
          {project.repository && <a className="action action-primary" href={project.repository} target="_blank" rel="noreferrer"><GithubLogoIcon aria-hidden="true" /> GitHub</a>}
          {project.website && <a className="action" href={project.website} target="_blank" rel="noreferrer">{locale === "es" ? "Visitar" : "Visit"} <ArrowUpRightIcon aria-hidden="true" /></a>}
          <DialogClose render={<Button variant="outline" className="project-modal-close" />}>{locale === "es" ? "Cerrar" : "Close"}</DialogClose>
        </div>
      </DialogContent>
    </Dialog>)}
  </div>
}

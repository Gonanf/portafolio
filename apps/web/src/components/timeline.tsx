import { animate, createDraggable, createDrawable, onScroll, stagger } from "animejs"
import { useEffect, useRef, useState } from "react"
import type { Locale, TimelineEntry } from "@/content/portfolio"

type TimelineProps = {
  readonly locale: Locale
  readonly entries: readonly TimelineEntry[]
}

export function Timeline({ locale, entries }: TimelineProps) {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const element = root.current
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const path = element.querySelector<SVGPathElement>("[data-timeline-path]")
    const nodes = element.querySelectorAll<HTMLElement>("[data-timeline-node]")
    const viewport = element.querySelector<HTMLElement>(".timeline-viewport")
    const track = element.querySelector<HTMLElement>(".timeline-track")
    if (!path || !viewport || !track) return

    const observer = onScroll({
      target: element,
      axis: "y",
      enter: "bottom 82%",
      onEnter: () => {
        animate(createDrawable(path), { draw: "0 1", duration: 1600, ease: "inOutSine" })
        animate(nodes, { opacity: [0, 1], scale: [0.4, 1], delay: stagger(160), duration: 680, ease: "outElastic(1, .55)" })
      },
    })
    const draggable = createDraggable(track, {
      container: viewport,
      x: true,
      y: false,
      cursor: { onHover: "grab", onGrab: "grabbing" },
      releaseStiffness: 150,
      releaseDamping: 20,
    })
    const wheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      event.preventDefault()
      viewport.scrollLeft += event.deltaY
    }
    viewport.addEventListener("wheel", wheel, { passive: false })
    return () => {
      observer.revert()
      draggable.revert()
      viewport.removeEventListener("wheel", wheel)
    }
  }, [])

  return <section ref={root} className="timeline-experience" aria-labelledby="timeline-title">
    <div className="timeline-intro">
      <p className="eyebrow">{locale === "es" ? "Trayectoria" : "Timeline"}</p>
      <h1 id="timeline-title" data-split-text>{locale === "es" ? "Capítulos que mueven el sistema." : "Chapters that move the system."}</h1>
      <p>{locale === "es" ? "Deslizá con la rueda o arrastrá la línea. Cada punto abre una capa de contexto." : "Use the wheel or drag the line. Every point opens another layer of context."}</p>
    </div>
    <div className="timeline-viewport" aria-label={locale === "es" ? "Línea de tiempo interactiva" : "Interactive timeline"}>
      <div className="timeline-track">
        <svg className="timeline-svg" viewBox="0 0 1600 420" preserveAspectRatio="none" aria-hidden="true"><path data-timeline-path d="M 0 220 C 180 80 310 350 510 195 S 840 105 1010 245 S 1310 340 1600 160" /></svg>
        {entries.map((entry, index) => <button key={`${entry.date}-${entry.title[locale]}`} type="button" className={`timeline-node ${index % 2 === 0 ? "timeline-node-top" : "timeline-node-bottom"} ${index === 0 ? "timeline-node-major" : ""} ${active === index ? "is-active" : ""}`} data-timeline-node aria-pressed={active === index} onClick={() => setActive(index)}>
          <span className="timeline-node-dot" />
          <span className="timeline-node-date">{entry.date}</span>
          <span className="timeline-node-title">{entry.title[locale]}</span>
          <span className="timeline-node-detail">{entry.description[locale]}</span>
          {entry.subItems?.map((sub, i) => <span className="timeline-node-detail" key={i}>{sub[locale]}</span>)}
          <span className="timeline-node-tags">{entry.tags.join(" · ")}</span>
        </button>)}
      </div>
    </div>
  </section>
}

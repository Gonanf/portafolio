import { useEffect, useState } from "react"

type CalendarEmbedProps = {
  readonly locale: "es" | "en"
  readonly url: string
}

export function CalendarEmbed({ locale, url }: CalendarEmbedProps) {
  const [state, setState] = useState<"closed" | "loading" | "fallback">("closed")

  useEffect(() => {
    if (state !== "loading") return

    const timeout = window.setTimeout(() => setState("fallback"), 2500)
    return () => window.clearTimeout(timeout)
  }, [state])

  const isOpen = state !== "closed"

  return <div className="calendar-embed">
    <button className="calendar-embed-toggle" type="button" aria-expanded={isOpen} onClick={() => setState(isOpen ? "closed" : "loading")}>
      {isOpen
        ? locale === "es" ? "Ocultar agenda integrada" : "Hide embedded schedule"
        : locale === "es" ? "Ver agenda integrada" : "View embedded schedule"}
    </button>
    {state === "loading" ? <div className="calendar-frame"><p className="calendar-loading" role="status">{locale === "es" ? "Abriendo agenda integrada de Google…" : "Opening the embedded Google schedule…"}</p><iframe title="Google Calendar appointment schedule" src={url} referrerPolicy="strict-origin-when-cross-origin" /></div> : null}
    {state === "fallback" ? <p className="calendar-fallback">{locale === "es" ? "Google no permitió cargar la agenda dentro de este navegador. " : "Google did not allow the schedule to load inside this browser. "}<a href={url} target="_blank" rel="noreferrer">{locale === "es" ? "Abrir agenda en una pestaña nueva ↗" : "Open the schedule in a new tab ↗"}</a></p> : null}
  </div>
}

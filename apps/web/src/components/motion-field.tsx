import { animate, stagger } from "animejs"
import { useEffect, useRef } from "react"

export function MotionField() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = root.current
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const nodes = element.querySelectorAll<HTMLElement>("[data-orbit]")
    const animation = animate(nodes, {
      rotate: stagger(24, { from: "center" }),
      scale: stagger([0.9, 1.1], { from: "center" }),
      duration: 1800,
      ease: "inOutQuad",
      alternate: true,
      loop: true,
    })
    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      animate(nodes, { x: x * 32, y: y * 32, duration: 500, ease: "outQuad" })
    }
    element.addEventListener("pointermove", move)
    return () => { animation.pause(); element.removeEventListener("pointermove", move) }
  }, [])

  return <div ref={root} className="motion-field" aria-hidden="true">
    <i data-orbit /><i data-orbit /><i data-orbit /><i data-orbit /><b data-orbit />
  </div>
}

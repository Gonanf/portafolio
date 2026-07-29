import { animate, stagger } from "animejs"
import { useEffect, useRef } from "react"

export function MotionField() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = root.current
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const nodes = element.querySelectorAll<HTMLElement>("[data-orbit]")
    const pulse = animate(nodes, {
      scale: stagger([0.65, 1.25], { from: "center" }),
      opacity: stagger([0.35, 1], { from: "center" }),
      duration: 1700,
      ease: "inOutSine",
      alternate: true,
      loop: true,
    })
    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      nodes.forEach((node, index) => animate(node, {
        x: x * (28 + index * 5),
        y: y * (28 + index * 5),
        rotate: Math.atan2(y, x) * (180 / Math.PI),
        duration: 520 + index * 55,
        ease: "outExpo",
      }))
    }
    const scatter = () => animate(nodes, {
      x: () => (Math.random() - 0.5) * 160,
      y: () => (Math.random() - 0.5) * 160,
      scale: [1, 0.35, 1],
      duration: 940,
      ease: "outElastic(1, .45)",
    })
    element.addEventListener("pointermove", move)
    element.addEventListener("pointerdown", scatter)
    return () => {
      pulse.pause()
      element.removeEventListener("pointermove", move)
      element.removeEventListener("pointerdown", scatter)
    }
  }, [])

  return <div ref={root} className="motion-field" aria-hidden="true">
    {Array.from({ length: 12 }, (_, index) => <i key={index} data-orbit />)}
    <b data-orbit />
  </div>
}

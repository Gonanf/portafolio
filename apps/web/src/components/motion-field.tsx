import { animate, stagger } from "animejs"
import { useEffect, useRef } from "react"

export function MotionField() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = root.current
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const particles = element.querySelectorAll<HTMLElement>("i[data-orbit]")
    const eye = element.querySelector<HTMLElement>("b[data-orbit]")
    if (!eye) return
    const pulse = animate(particles, {
      scale: stagger([0.65, 1.25], { from: "center" }),
      opacity: stagger([0.35, 1], { from: "center" }),
      duration: 1700,
      ease: "inOutSine",
      alternate: true,
      loop: true,
    })

    let cursorX = 0.5
    let cursorY = 0.5
    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect()
      cursorX = (event.clientX - bounds.left) / bounds.width
      cursorY = (event.clientY - bounds.top) / bounds.height
      const x = cursorX - 0.5
      const y = cursorY - 0.5
      particles.forEach((node, index) => animate(node, {
        x: x * (28 + index * 5),
        y: y * (28 + index * 5),
        rotate: Math.atan2(y, x) * (180 / Math.PI),
        duration: 520 + index * 55,
        ease: "outExpo",
      }))
    }
    const scatter = () => animate(particles, {
      x: () => (Math.random() - 0.5) * 160,
      y: () => (Math.random() - 0.5) * 160,
      scale: [1, 0.35, 1],
      duration: 940,
      ease: "outElastic(1, .45)",
    })
    const relax = () => { cursorX = 0.5; cursorY = 0.5 }

    // rAF loop: the eye eases toward the cursor every frame (smooth even when the pointer is still)
    // and blinks periodically with a gentle scaleY dip.
    let ex = 0, ey = 0, er = 0
    let nextBlink = performance.now() + 2500
    let raf = 0
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const tx = cursorX - 0.5
      const ty = cursorY - 0.5
      ex += (tx * 28 - ex) * 0.08
      ey += (ty * 28 - ey) * 0.08
      const target = Math.atan2(ty, tx) * (180 / Math.PI)
      const delta = ((target - er + 180) % 360 + 360) % 360 - 180
      er += delta * 0.08
      const t = (now - nextBlink) / 280
      if (t >= 1) nextBlink = now + 2200 + Math.random() * 2400
      const dip = t >= 0 && t < 1 ? 0.375 * (1 - Math.cos(2 * Math.PI * t)) : 0
      eye.style.transform = `translate(${ex}px, ${ey}px) rotate(${er}deg) scaleY(${1 - dip})`
    }
    raf = requestAnimationFrame(tick)

    element.addEventListener("pointermove", move)
    element.addEventListener("pointerdown", scatter)
    element.addEventListener("pointerleave", relax)
    return () => {
      pulse.pause()
      cancelAnimationFrame(raf)
      element.removeEventListener("pointermove", move)
      element.removeEventListener("pointerdown", scatter)
      element.removeEventListener("pointerleave", relax)
    }
  }, [])

  return <div ref={root} className="motion-field" aria-hidden="true">
    {Array.from({ length: 12 }, (_, index) => <i key={index} data-orbit />)}
    <b data-orbit />
  </div>
}

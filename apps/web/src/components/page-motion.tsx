import { animate, stagger } from "animejs"
import { useEffect } from "react"

export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        animate(entry.target, { opacity: [0, 1], translateY: [36, 0], filter: ["blur(10px)", "blur(0px)"], duration: 720, ease: "outExpo" })
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.16 })
    revealTargets.forEach((target) => observer.observe(target))
    animate("[data-hero-line]", { opacity: [0, 1], translateY: [24, 0], delay: stagger(110), duration: 900, ease: "outExpo" })
    const magneticTargets = document.querySelectorAll<HTMLElement>("[data-magnetic]")
    const listeners = [...magneticTargets].map((target) => {
      const move = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect()
        animate(target, { translateX: (event.clientX - rect.left - rect.width / 2) * 0.12, translateY: (event.clientY - rect.top - rect.height / 2) * 0.12, duration: 320, ease: "outQuad" })
      }
      const leave = () => animate(target, { translateX: 0, translateY: 0, duration: 580, ease: "outElastic(1, .5)" })
      target.addEventListener("pointermove", move)
      target.addEventListener("pointerleave", leave)
      return () => { target.removeEventListener("pointermove", move); target.removeEventListener("pointerleave", leave) }
    })
    return () => { observer.disconnect(); listeners.forEach((remove) => remove()) }
  }, [])
  return null
}

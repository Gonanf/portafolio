import { animate, createAnimatable, createDraggable, createDrawable, onScroll, splitText, stagger } from "animejs"
import { useEffect } from "react"

export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        animate(entry.target, {
          opacity: [0, 1],
          translateY: [28, 0],
          rotate: [-1.2, 0],
          filter: ["blur(8px)", "blur(0px)"],
          duration: 820,
          ease: "outExpo",
        })
        revealObserver.unobserve(entry.target)
      }
    }, { threshold: 0.14 })
    revealTargets.forEach((target) => revealObserver.observe(target))

    const splitters = [...document.querySelectorAll<HTMLElement>("[data-split-text]")].map((target) => {
      const splitter = splitText(target, { words: { class: "motion-word", wrap: "clip" }, accessible: true })
      animate(splitter.words, {
        opacity: [0, 1],
        translateY: ["115%", "0%"],
        rotate: [2, 0],
        delay: stagger(42, { start: 120 }),
        duration: 920,
        ease: "outExpo",
      })
      return splitter
    })

    animate("[data-hero-line]", {
      opacity: [0, 1],
      translateY: [22, 0],
      delay: stagger(100),
      duration: 780,
      ease: "outExpo",
    })

    const magneticTargets = document.querySelectorAll<HTMLElement>("[data-magnetic]")
    const magneticListeners = [...magneticTargets].map((target) => {
      const move = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect()
        animate(target, {
          translateX: (event.clientX - rect.left - rect.width / 2) * 0.12,
          translateY: (event.clientY - rect.top - rect.height / 2) * 0.12,
          duration: 320,
          ease: "outQuad",
        })
      }
      const leave = () => animate(target, { translateX: 0, translateY: 0, duration: 580, ease: "outElastic(1, .5)" })
      target.addEventListener("pointermove", move)
      target.addEventListener("pointerleave", leave)
      return () => {
        target.removeEventListener("pointermove", move)
        target.removeEventListener("pointerleave", leave)
      }
    })

    const heroArt = document.querySelector<HTMLElement>(".hero-art")
    const heroArtCleanup = heroArt ? (() => {
      const tilt = createAnimatable(heroArt, { x: 0, y: 0, rotate: 0, duration: 620, ease: "outElastic(1, .55)" })
      const move = (event: PointerEvent) => {
        const bounds = heroArt.getBoundingClientRect()
        const x = event.clientX - bounds.left - bounds.width / 2
        const y = event.clientY - bounds.top - bounds.height / 2
        tilt.x(x * 0.018)
        tilt.y(y * 0.018)
        tilt.rotate(x * 0.006)
      }
      const leave = () => {
        tilt.x(0)
        tilt.y(0)
        tilt.rotate(0)
      }
      heroArt.addEventListener("pointermove", move)
      heroArt.addEventListener("pointerleave", leave)
      return () => {
        heroArt.removeEventListener("pointermove", move)
        heroArt.removeEventListener("pointerleave", leave)
        tilt.revert()
      }
    })() : () => undefined

    const timelinePath = document.querySelector<SVGPathElement>("[data-timeline-path]")
    const timelineScroll = timelinePath ? onScroll({
      target: timelinePath,
      axis: "y",
      enter: "bottom 88%",
      onEnter: () => animate(createDrawable(timelinePath), { draw: "0 1", duration: 1800, ease: "inOutSine" }),
    }) : undefined

    const timelineCards = document.querySelectorAll<HTMLElement>("[data-timeline-card]")
    const draggables = [...timelineCards].flatMap((card) => {
      const container = card.parentElement
      if (!container) return []
      return [createDraggable(card, {
        container,
        x: { snap: 0 },
        y: false,
        cursor: { onHover: "grab", onGrab: "grabbing" },
        releaseStiffness: 180,
        releaseDamping: 18,
      })]
    })
    const timelineListeners = [...timelineCards].map((card) => {
      const toggle = () => {
        const active = card.classList.toggle("is-active")
        card.setAttribute("aria-expanded", `${active}`)
        animate(card, { scale: active ? [1, 1.025, 1] : [1.025, 1], rotate: active ? [0, -0.6, 0] : [0, 0.6, 0], duration: 560, ease: "outElastic(1, .55)" })
      }
      const keydown = (event: KeyboardEvent) => {
        if (event.key !== "Enter" && event.key !== " ") return
        event.preventDefault()
        toggle()
      }
      card.addEventListener("click", toggle)
      card.addEventListener("keydown", keydown)
      return () => {
        card.removeEventListener("click", toggle)
        card.removeEventListener("keydown", keydown)
      }
    })

    const timelineScrolls = [...timelineCards].map((card) => onScroll({
      target: card,
      axis: "y",
      enter: "bottom 84%",
      onEnter: () => animate(card, { opacity: [0, 1], translateY: [36, 0], rotate: [-1.6, 0], duration: 760, ease: "outExpo" }),
    }))

    return () => {
      revealObserver.disconnect()
      splitters.forEach((splitter) => splitter.revert())
      magneticListeners.forEach((remove) => remove())
      heroArtCleanup()
      timelineScroll?.revert()
      timelineScrolls.forEach((scroll) => scroll.revert())
      draggables.forEach((draggable) => draggable.revert())
      timelineListeners.forEach((remove) => remove())
    }
  }, [])

  return null
}

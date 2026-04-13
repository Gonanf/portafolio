import { useMotionValue, motion, useMotionTemplate, useSpring } from "motion/react"
import { type ReactNode, useRef } from "react"

interface Props {
  children?: ReactNode,
  className?: string,
  fromColor?: string,
  toColor?: string,
  childClass?: string
}

export function GradientElement({ children, className = 'bg-foreground', fromColor = 'rgba(135, 51, 51, 0.1)  0%', toColor = 'rgba(0,0,0,0) 10%', childClass = `absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 z-10  pointer-events-none`, ...props }: Props) {

  console.log("aaa")
  const element = useRef<HTMLDivElement>(null)
  const currentX = useSpring(useMotionValue(0))
  const currentY = useSpring(useMotionValue(0))
  const updateMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!element.current) return

    const size = element.current.getBoundingClientRect()
    currentX.set((event.clientX - size.left) / size.width * 100)
    currentY.set((event.clientY - size.top) / size.height * 100)

  }

  return (
    <motion.div ref={element} {...props} className={className + ' group relative z-0'} onMouseMove={updateMouse}>
      <motion.div className={childClass} style={{ backgroundImage: useMotionTemplate`radial-gradient( circle at ${currentX}% ${currentY}%, ${fromColor}, ${toColor} )` }} />
      {children}
    </motion.div>)
}

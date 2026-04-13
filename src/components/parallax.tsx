import { motion, useScroll, useTransform } from "motion/react"
import { useRef, type ReactNode, type RefObject } from "react"

interface Props {
  children: ReactNode,
  className?: string,
  backgroundY?: string[],
  contentY?: string[],
  backgroundOP?: number[],
  contentOP?: number[],
  contentClass?: string,
  ref?: RefObject<HTMLDivElement | null>
}

function ParallaxSection({ children, className = '', backgroundY = ["0%", "0%", "30%"],contentY = ["0%","0%","0%"], contentOP = [0, 1, 1, 0], contentClass = 'z-10 sticky inset-0', ref, ...props }: Props) {
  const ref_T = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref_T, offset: ["start end", "end start"] })

  const bgY = useTransform(scrollYProgress, [0, 0.5, 1], backgroundY)
  const CY = useTransform(scrollYProgress, [0, 0.5, 1], contentY)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], contentOP)

  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], contentOP)

  return (<motion.section {...props} ref={ref} className={className + " relative min-h-[150%]"} style={{ opacity: bgOpacity, y: bgY }}>
    <motion.div ref={ref_T} className={contentClass} style={{ opacity: contentOpacity,y: CY }}>
      {children}
    </motion.div>
  </motion.section>)
}

export default ParallaxSection

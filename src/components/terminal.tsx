import Typed from 'typed.js'
import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'

interface Props {
  children?: React.ReactNode,
  className?: string,
  textSpeed?: number
}

function Terminal({ children, className, textSpeed = 35 }: Props) {
  const textRef = useRef<HTMLSpanElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

useEffect(() => {
if (!textRef.current || !childRef.current) return 

 const t = new Typed(textRef.current!, {
          stringsElement: childRef.current!,
          typeSpeed: textSpeed,
          loop: false,
          showCursor: true,
});

return () => t.destroy() 
},[])

  return (
    <motion.div 
      className={`
        relative 
        rounded-lg 
        p-4 
        font-mono 
        text-green-400 
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span 
        ref={textRef}
        className="block leading-relaxed min-h-[1.5em]"
      >
        <div ref={childRef} className="hidden">
          {children}
        </div>
      </span>
      
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 rounded-lg pointer-events-none"></div>

    </motion.div>
  )
}

export default Terminal

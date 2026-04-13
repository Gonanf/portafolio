import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useRef } from 'react'
import Hero from '@/components/hero.tsx'
import Sobre from '@/components/sobre.tsx'
import Habilidades from '@/components/habilidades'
import Educacion from '@/components/educacion'
import Gradient from '@/components/bg_gradient'
import { GradientElement } from '@/components/gradient'
import Proyectos from '@/components/proyectos'
import Contacto from '@/components/contacto'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})


function HomeComponent() {

  const section = useRef(null)

  return (
    <GradientElement>
      <motion.div transition={{ delay: 1 }} initial={{ opacity: 1 }} animate={{ opacity: 0 }} className='fixed flex inset-0 justify-center items-center transform-gpu transform-[-50%,-50%] '>
        <motion.div transition={{ delay: 1 }} className='w-full h-full bg-fuchsia-950' initial={{ clipPath: "inset(0 0 0 0)" }} animate={{ clipPath: "inset(0 100% 0 0)" }} >
        </motion.div>
        <motion.div transition={{ duration: 0.5 }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-1 absolute inset-0 translate-x-[50vw] z-10 bg-foreground"></motion.div>
        <motion.div transition={{ delay: 1 }} className='w-full h-full grow bg-fuchsia-950' initial={{ clipPath: "inset(0 0 0 0)" }} animate={{ clipPath: "inset(0 0 0 100%)" }} ></motion.div>
      </motion.div>
      <Gradient className='fixed w-full h-full bg-radial from-transparent to-90% to-black/80 pointer-events-none z-20'></Gradient>

      <motion.div layout
        initial={{ opacity: 0 }}
        transition={{ delay: 1.5 }}
        animate={{ opacity: 1 }}
        ref={section}
        className='relative flex flex-col gap-[25vh] '
      >

        <Hero />
        <Sobre />
        <Habilidades />
        <Educacion />
        <Proyectos />
        <Contacto />
      </motion.div>
    </GradientElement>
  )
}


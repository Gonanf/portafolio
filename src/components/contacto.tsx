import { easeInOut, motion } from "motion/react";
import ParallaxSection from "./parallax";
import type { ReactNode } from "react";
import { LucideMail } from 'lucide-react';

interface Contact {
  logo: ReactNode,
  titulo: string,
  url: string,
  color: string
}


function ProjectCard({ project }: { project: Contact }) {
  const statusColors = (opacity: number) => {
    return `oklch(${project.color} / ${opacity})`
  };

  const hover_variant = {
    hover: { color: statusColors(1) }
  }
  return (
    <motion.a
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring"
      }}
      whileHover={'hover'}
      variants={{
        hover: {
          scale: 1.05,
          filter: `drop-shadow(16px 16px ${statusColors(1)})`,
          // boxShadow: "0px 0px 45px 10px rgba(51,209,122,0.6)"
        }
      }}
      className="relative"
      style={{ filter: `drop-shadow(0 3px 3px ${statusColors(1)})` }}
      href={project.url}
    >
      <div className="bg-black/95 rounded-xl p-2 sm:p-3 h-full flex flex-col" style={{ border: `1px solid ${statusColors(0.4)}` }}>
        <div className="mb-2 flex flex-col justify-between items-center flex-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            {project.logo}
          </div>
          <motion.h3 className="text-sm sm:text-base text-wrap h-full break-all w-full text-center font-bold mb-1" initial={{ color: 'oklch(98.2% 0.018 155.826)' }} transition={{ duration: 0.2, ease: easeInOut }} variants={hover_variant}>
            {project.titulo}
          </motion.h3>
        </div>

      </div>
      <motion.div className="absolute inset-0 z-20 w-full h-full rounded-xl pointer-events-none" style={{ backgroundImage: `linear-gradient(90deg,${statusColors(0.1)} 0%, ${statusColors(0.4)} 100%)` }} initial={{ opacity: 0 }} variants={{ hover: { opacity: 100 } }}></motion.div>
    </motion.a>
  );
}

function Contacto() {

  const contactos: Array<Contact> = [
    {
      logo: <svg role="img" stroke="white" className="size-6 sm:size-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>,
      titulo: "Gonanf",
      color: "44.6% 0.043 257.281",
      url: "https://github.com/Gonanf"
    },

    {
      logo: <LucideMail size={24} />,
      titulo: "solotorevskygabrieltrabajo@gmail.com",
      color: "74% 0.238 322.16",
      url: "mailto:solotorevskygabrieltrabajo@gmail.com"
    },

    {
      logo: <img src='/InBug-White.png' className="size-6 sm:size-8 object-contain" />,
      titulo: "Gabriel Solotorevsky",
      color: "62.3% 0.214 259.815",
      url: "https://www.linkedin.com/in/gabriel-solotorevsky-35524431b"
    },
  ]

  return (
    <ParallaxSection className="bg-slate-900/50 bg-[url('/kira.png')] bg-cover bg-center" >
      <div className="min-h-screen max-w-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-8"
        >
          <p className="text-2xl sm:text-3xl p-4 font-extrabold">Contacto</p>
          <div className="w-24 h-1 bg-linear-gradient-to-r from-secundary to-white mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-3 gap-6 m-6">
          {contactos.map((v, index) => { return <ProjectCard project={v} key={index} /> })}
        </div>

      </div>
    </ParallaxSection>
  )
}

export default Contacto

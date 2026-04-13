import type { ReactNode } from "react";
import ParallaxSection from "./parallax";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Item({ children, onHover, index }: { children: ReactNode; onHover: (index: number) => void, index: number }) {
  return (
    <motion.div
      className="flex gap-4 items-center rounded-full cursor-pointer"
      initial={{ scale: 1, color: "var(--muted)", textShadow: "0 0 0" }}
      whileHover={"hover"}
      variants={{
        hover: {
          scale: 1.1,
          color: "white",
          textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6",
          backgroundColor: "rgba(100,100,100,1)",
          padding: "10%"
        }
      }}
      onHoverStart={() => {
        onHover(index);
      }}
      onHoverEnd={() => onHover(0)}
    >
      <motion.div
        className="w-5 h-5 bg-linear-120 from-cyan-500 to-amber-950 rounded-full"
        variants={{ hover: { filter: "blur(5px)" } }}
      ></motion.div>
      <motion.p className="text-sm sm:text-base md:text-xl">{children}</motion.p>
    </motion.div>
  )
}

function Habilidades() {
  const seccion1 = ["Rust", "Javascript", "Typescript", "Python", "C++", "HTML", "CSS", "Vue", "Nuxt"]
  const seccion2 = ["ShadCN UI", "TailwindCSS", "Git", "Github", "Linux", "Arch", "Cloudflare", "API Rest", "POO"]
  const images = ["/rust2.png", "/js.png", "/ts.png", "/python.png", "/cpp.png", "/html.png", "/css.png", "/vue.png", "/nuxt.png", "/shadcn-ui-seeklogo.svg", "/tailwindcss.png", "/git.png", "/github-mark.png", "/linux.png", "/arch-linux.png", "/cloudflare.png", "/server.svg", "/pi.svg"]

  const [currentImage, setCurrentImage] = useState("/rust2.png")

  const handleImageHover = (index: number) => {
    setCurrentImage(images[index])
  }

  return (
    <ParallaxSection className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center max-w-screen grow min-h-[150vh]"} contentClass="sticky inset-0 min-h-screen flex flex-col backdrop-blur-sm">
      <div className="border-2 sm:border-4 border-fuchsia-950 min-h-[90vh] m-2 sm:m-4 md:m-8 lg:m-12 flex flex-col">
        <p className="text-xl sm:text-2xl md:text-4xl p-3 sm:p-6 font-extrabold">Habilidades</p>

        <div className='flex flex-col md:flex-row grow justify-evenly gap-1.5 border-t-2 sm:border-t-4 border-fuchsia-950 p-2 sm:p-4' >
          <div className="items-center md:items-end justify-between flex flex-row md:flex-col flex-wrap gap-2 md:gap-0">
            {seccion1.map((val, index) => <Item key={val} onHover={handleImageHover} index={index}>{val}</Item>)}
          </div>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              className="self-center drop-shadow-2xl drop-shadow-amber-300/50 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 md:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </AnimatePresence>

          <div className="items-center md:items-start justify-between flex flex-row md:flex-col flex-wrap gap-2 md:gap-0">
            {seccion2.map((val, index) => <Item key={val} onHover={handleImageHover} index={index + seccion1.length}>{val}</Item>)}
          </div>
        </div>

      </div>
    </ParallaxSection>
  )
}

export default Habilidades

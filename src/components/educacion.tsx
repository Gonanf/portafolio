import ParallaxSection from "./parallax";
import { easeIn, easeInOut, motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState, type ReactNode } from "react";

interface Items {
  titulo: string,
  nombre: string,
  fecha: string,
  image: string
}

interface Props {
  children?: ReactNode,
  value?: MotionValue,
  className?: string
}

interface PropsContainer {
  items: Items[],
  percentage: MotionValue,
}

function PartContainer({items, percentage }: PropsContainer) {

  //Dam
  const change_ar = [0.1,0.4,0.7]
  const change_op_list = [0,0.4,0.55,0.7,0.8]
  const leftside = useTransform(percentage, change_op_list, ["100%","0%","100%","0%","100%"])
  const item_index = useTransform(percentage, change_ar, [0,1,2])

  const [currentIndex, setIndex] = useState(0)

  item_index.on('change', (value) => {
    const floor = Math.floor(value)
    if (currentIndex != floor) {
      setIndex(floor)
    }
  })

  return (<motion.div className="relative min-h-full w-full flex flex-col md:flex-row grow bg-cover bg-center">
    <motion.img src={items[currentIndex].image} alt="" className="absolute w-full h-full object-cover blur-xl" style={{ opacity: leftside }} />
    <Part className="hidden md:block w-[50vw] h-full m-2 sm:m-4">
      <Slider percentage={percentage}></Slider>
    </Part>
    <Part value={leftside} className="flex flex-col justify-center w-full md:w-[50vw] h-full m-2 sm:m-4 px-2 sm:px-0">
      <div className="border-2 border-cyan-400 bg-cyan-800/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-md gap-2 sm:gap-4 grid">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-extrabold">{items[currentIndex].titulo}</h3>
        <p className="text-base sm:text-lg md:text-xl text-cyan-400">{items[currentIndex].nombre}</p>
        <p className="text-sm sm:text-base md:text-lg px-2 sm:px-4 py-1 sm:py-2 text-cyan-300 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-100/30 rounded-full mt-4 sm:mt-8 md:mt-12">{items[currentIndex].fecha}</p>
      </div>
    </Part>
  </motion.div>)
}

function Part({ children, value, className = "absolute top-0 w-full md:w-[50vw] h-full m-2 sm:m-4" }: Props) {
  return (
    <motion.div className={className} transition={{ duration: 1, ease: easeInOut }} style={{ opacity: value }}>
      {children}
    </motion.div>
  )
}

function Slider({ percentage }: { percentage: MotionValue }) {
  const Y = useSpring(useTransform(percentage, [0.25, 0.75], ["-80vh", "-10vh"]))

  return (<div className="relative h-full ml-12">
    <div className="w-2 bg-fuchsia-500 h-full"></div>
    <motion.div className="rounded-full bg-radial from-fuchsia-500 to-purple-700 border border-t-purple-800 absolute w-12 h-12" animate={{ rotate: 360 }} transition={{ duration: 1, ease: easeIn, repeat: Infinity }} style={{ y: Y, x: "-40%" }}></motion.div>
  </div>)
}

function Educacion() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  scrollYProgress.on('change',(val) => console.log("ASS",val))
  const items: Array<Items> = [
    {
      titulo: "Educacion Primaria",
      nombre: "Nuevo Colegio Glew",
      fecha: "Marzo 2011 - Diciembre 2017",
      image: "logo_bg.png"
    },
    {
      titulo: "Educacion Secundaria Tecnica",
      nombre: "E.E.S.T N°2",
      fecha: "Marzo 2018 - Diciembre 2025",
      image: "escuela.png"
    },
    {
      titulo: "Pasantias (Puesto FullStack)",
      nombre: "SISCOD",
      fecha: "Agosto 2025 - Octubre 2025",
      image: "logo-siscod-1.png"
    },
  ]

  return (
    <ParallaxSection className={"bg-amber-950/50 bg-linear-to-b from-cyan-950 to-amber-950 bg-cover bg-center max-w-screen"} backgroundY={["0%", "0%", "10%"]} contentY={["0%", "0%", "-10%"]} contentClass="relative min-h-screen flex flex-col backdrop-blur-sm">
      <div ref={ref} className=" min-h-[500vh]" >
      <div className="border-2 relative sm:border-4 border-fuchsia-950 mt-2 sm:mt-4 mx-2 sm:mx-4 pb-2 sm:pb-4 flex flex-col sticky inset-0 min-h-screen">
        <p className="text-xl relative sm:text-2xl md:text-4xl p-3 sm:p-6 font-extrabold">Educacion/Experiencia</p>
        <div className='flex grow border-t-2 sm:border-t-4 border-fuchsia-950'>
          <PartContainer items={items} percentage={scrollYProgress} />
        </div>
      </div>
      </div>
    </ParallaxSection>
  )
}

export default Educacion

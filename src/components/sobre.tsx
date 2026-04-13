import { motion } from "motion/react";
import ParallaxSection from "./parallax";
import Terminal from "./terminal";

function Sobre() {
  return (
    <ParallaxSection className="bg-[url('/kira.png')] bg-cover max-w-screen min-h-[150vh] grow" >
      <div className='grow flex flex-col gap-5 min-h-screen px-4 sm:px-8 justify-center items-center' >
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className='w-full md:w-[70%] lg:w-[50%] backdrop-blur-3xl border-2 border-green-500/40 shadow-[0px_0px_25px_5px_rgba(51,209,122,0.6)] sm:shadow-[0px_0px_45px_10px_rgba(51,209,122,0.6)] bg-black/95 rounded-xl sm:rounded-3xl p-2 sm:p-4'>
          <p>
            <span className='text-fuchsia-800'>chaos</span>
            <span className='text-amber-300'>@</span>
            <span className='text-green-600'>chaman</span>
            <span className='text-amber-300'> {'>'} </span>
            <span className='text-fuchsia-800'> whoami</span>
          </p>


          <Terminal className='block text-left text-[10px] sm:text-xs md:text-sm' textSpeed={20}>
            <p>
              <br />
              <span className='text-fuchsia-800'>Soy un desarrollador autodidacta, actualmente con un interes en los sistemas de bajo nivel.</span>
              <br />
              <br />
              <span className='text-amber-300'>Me considero alguien que se puede adaptar a varias situaciones en cortos periodos de tiempo y aprender lo necesario para avanzar en los proyectos que me proponga.</span>
              <br />
              <br />
              <span className='text-green-600'>Logre realizar sistemas que satisfacen las necesidades de mis clientes cumpliendo las fechas límites.</span>
              <br />
              <br />
              <span className='text-fuchsia-800'>Realice proyectos los cuales pasaron por un proceso de prueba y finalmente se publicaron utilizando servicios distribuidos (Cloudflare Pages, Workers, D1, R2, Etc.)</span>
            </p>
          </Terminal>



        </motion.div>

      </div>

    </ParallaxSection>
  )
}

export default Sobre

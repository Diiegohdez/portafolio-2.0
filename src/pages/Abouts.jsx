import React from 'react';
import "./abouts.css";
import { motion } from "framer-motion";

const Abouts = () => {

  return (
    <div className='abouts' id="section2" >
      <motion.div viewport={{ once: false }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }} className='abouts-title'>
        <h1>Sobre Mi <i class="fa-solid fa-address-card fa-bounce"></i></h1>
      </motion.div>
      <div className='abouts-text'>
        <motion.p viewport={{ once: false }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }}>¡Hola! Soy un desarrollador web con un entusiasmo por la creación digital. Mi camino en la programación comenzó con un interés por la tecnología y el deseo de construir soluciones en línea que sean funcionales y atractivas.
          he trabajado en proyectos colaborativos y personales para aplicar y ampliar mis habilidades en el uso de tecnologías como React, HTML, CSS, JavaScript y Node. Mi enfoque es crear sitios web elegantes y eficientes.
        </motion.p>
      </div>
      <motion.div viewport={{ once: false }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }} className='abouts-redes'>
        <a href="https://www.linkedin.com/in/diiego-hdez/" target="_blank" className='abouts-ico1'><i class="fa-brands fa-linkedin fa-lg"></i></a>
        <a href="https://github.com/Diiegohdez" target="_blank" className='abouts-ico2'><i class="fa-brands fa-github fa-lg"></i></a>
        <a className='button-cv' href="./Diego_HM.pdf" download>
          {''}
          Descargar CV</a>
      </motion.div>
    </div>
  )
}

export default Abouts
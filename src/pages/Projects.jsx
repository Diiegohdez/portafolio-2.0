import React from 'react';
import "./projects.css";
import { useInform } from '../hooks/useInform';
import { motion } from "framer-motion";

const Projects = () => {
  const { datos } = useInform();
  console.log(datos);
  return (
    <div className='proyects' id="section4">
      <motion.div viewport={{ once: false }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }} className='proyects-title'>
        <h1>Proyectos <i class="fa-solid fa-briefcase fa-bounce"></i></h1>
      </motion.div>
      <div className='proyect-container'>
        {datos.map(item => (
          <motion.div viewport={{ once: false }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }} className='proyect-item' key={item._id}>
            <img src={item.img} alt='img' />
            <h1>{item.name}</h1>
            <div  className='proyect-ico'>
              <a href={item.url} target="_blank" className='proyect-ico1'><i class="fa-solid fa-laptop-file fa-lg"></i><p className='demo-p'>Web Demo</p></a>
              <a href={item.repositorio} target="_blank" className='proyect-ico2'><i class="fa-brands fa-github fa-lg"></i><p>Github</p></a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
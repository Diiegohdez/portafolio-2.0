import React from 'react';
import "./skill.css";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className='skill' id="section3">
      <motion.div viewport={{ once: false }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }} className='skill-title'>
        <h1>Habilidades <i class="fa-solid fa-file-code fa-bounce"></i></h1>
      </motion.div>
      <motion.div viewport={{ once: false }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }} className='skill-content'>
      <div className='ico-1'>
        <i class="fa-brands fa-react fa-xl"></i>
        <p className='skill-1'>React</p>
        </div>
      <div className='ico-2'>
        <i class="fa-brands fa-square-js fa-xl"></i>
        <p className='skill-2'>Javascript</p>
        </div>
      <div className='ico-3'>
        <i class="fa-brands fa-html5 fa-xl"></i>
        <p className='skill-3'>HTML</p>
        </div>
      <div className='ico-4'>
        <i class="fa-brands fa-css3-alt fa-xl"></i>
        <p className='skill-4'>CSS</p>
        </div>
      <div className='ico-5'>
        <i class="fa-brands fa-node fa-xl"></i>
        <p className='skill-5'>Node js</p>
        </div>
      <div className='ico-6'>
        <i class="fa-brands fa-github fa-xl"></i>
        <p className='skill-6'>Github</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Skill
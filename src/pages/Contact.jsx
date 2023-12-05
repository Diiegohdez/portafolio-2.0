import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { motion } from "framer-motion";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6d56mk', 'template_b4unqje', form.current, 'E1xaMwNW4p_XQ3_V4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div id='section5'>
      <div className='contact' >
      <motion.div viewport={{ once: false }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }} className='contact-title'>
        <h1>Contacto <i class="fa-solid fa-address-book fa-bounce"></i></h1>
      </motion.div>
      <motion.div viewport={{ once: false }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: .60, delay: 1 * .50 }}>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea  name="message" ></textarea>
        <button type="submit" value="Send" >Enviar</button>
      </form>
      </motion.div>
      </div>
    </div>
  );
};

export default Contact
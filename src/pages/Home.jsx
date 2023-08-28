import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div id='section1'>
      <div className='home'>
        <div className='home-title'>
          <h3>Hola, soy</h3>
          <h1 className='home-name'>Diego Hdez</h1>
          <h3>Web Developer <i class="fa-solid fa-laptop-code fa-beat"></i></h3>
        </div>
        <img src='https://i.ibb.co/Kwc4Yy1/avatar-ae.png' alt='logo' className='home-img'/>
      </div>

    </div>
  )
}

export default Home
import React from 'react';
import "./navbar.css";
import { Link } from 'react-scroll';


const Navbar = () => {

    return (
        <nav className='nav'>
            <div className='navbar-container' >
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="section1">Inicio</Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="section2">Sobre mi </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="section3">Habilidades</Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="section4">Proyectos</Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="section5">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};





export default Navbar
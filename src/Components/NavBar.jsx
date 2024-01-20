import React, { Component } from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import logo from '../../public/img/logo.png';




export default function NavBar() {
    return (
        <div className='nav flex justify-between w-full mt-10' >
            <div className="navbar px-7 text-lg text-white">
                <img src={logo} alt="logo" className='w-23 h-14 ml-10 mt-10'/>
            </div>

            <div className="navbar px-2 mx-7 text-lg text-white space-x-2">
                <a href="https://www.linkedin.com/in/jonathan03ant/" target="_blank" rel="noopener noreferrer" className=''>
                    <SiLinkedin />
                </a>
                <a href="https://github.com/Jonathan03ant" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}




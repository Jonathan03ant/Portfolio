import React, { Component } from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import { PiGithubLogoThin } from "react-icons/pi";




export default function NavBar() {
    return (
        <div className='nav flex justify-between mt-10' >
            <div className="navbar px-7 text-lg text-white">
                <PiGithubLogoThin /> {/* This icon will be on the left */}
            </div>

            <div className="navbar px-2 mx-7 text-lg text-white space-x-2">
                <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className=''>
                    <SiLinkedin />
                </a>
                <a href="https://github.com/Jonathan03ant" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}




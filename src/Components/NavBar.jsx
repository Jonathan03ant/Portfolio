import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import { PiGithubLogoThin } from "react-icons/pi";




class NavBar extends Component {
    render() {
        return (
            <div className='flex justify-between mt-10' >
                <div className="navbar px-7 text-lg text-white">
                    <PiGithubLogoThin /> {/* This icon will be on the left */}
                </div>

                <div className="navbar px-2 mx-7 text-lg text-white space-x-2">
                    <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className=''>
                        <SiLinkedin />
                    </a>
                    <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBar;


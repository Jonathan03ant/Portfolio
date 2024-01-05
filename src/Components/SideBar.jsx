import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const SideBar = () => {
    const location = useLocation();

    return (
        <>
        <div className="sidebar font-rock-salt text-xl flex flex-col items-start space-y-5  mx-20 py-20 px-10">
            <Link to="/" className={`text-white hover:translate-x-3 custom-hover ${location.pathname === '/' ? 'text-3xl' : ''}`}> HOME</Link>
            <Link to="/projects" className={` text-white hover:translate-x-3 custom-hover ${location.pathname === '/projects' ? 'text-3xl' : ''}`}> PROJECTS</Link>
            <Link to="/testimonies" className={` text-white hover:translate-x-3 custom-hover ${location.pathname === '/testimonies' ? 'text-3xl' : ''}`}> TESTIMONIES</Link>
            <Link to="/about" className={` text-white hover:translate-x-3 custom-hover ${location.pathname === '/about' ? 'text-3xl' : ''}`}> ABOUT</Link>
        </div>
        </>
    );
}

export default SideBar;
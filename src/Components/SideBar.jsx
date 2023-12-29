import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="sidebar font-rock-salt text-xl flex flex-col items-start space-y-4 my-40 mx-20 py-20 px-10">
            <Link to="/" className={`text-white hover:translate-x-3 custom-hover ${location.pathname === '/' ? 'text-4xl' : ''}`}> HOME</Link>
            <Link to="/projects" className={` text-white hover:translate-x-3 custom-hover ${location.pathname === '/projects' ? 'text-4xl' : ''}`}> PROJECTS</Link>
            <Link to="/testimonies" className={` text-white hover:translate-x-3 custom-hover ${location.pathname === '/testimonies' ? 'text-4xl' : ''}`}> TESTIMONIES</Link>
            <Link to="/about" className={` text-white hover:translate-x-3 custom-hover ${location.pathname === '/about' ? 'text-4xl' : ''}`}> ABOUT</Link>
        </div>
    );
}

export default SideBar;
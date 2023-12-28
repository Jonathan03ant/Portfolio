import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return (
        <div className=" font-rock-salt text-lg flex flex-col items-start space-y-4 my-40 ml-40 py-20 px-10">
            <Link to="/" className="text-lg text-white ">HOME</Link>
            <Link to="/projects" className="text-lg text-white"> PROJECTS</Link>
            <Link to="/testimonies" className="text-lg text-white"> TESTIMONIES</Link>
            <Link to="/about" className="text-lg text-white"> ABOUT</Link>
        </div>
    );
}



export default SideBar;

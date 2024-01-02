import React from 'react';
import { IoArrowRedoOutline } from "react-icons/io5";
import c from '../../../public/img/c.png';
import cpp from '../../../public/img/cpp.png';
import react from '../../../public/img/react.png';
import firebase from '../../../public/img/firebase.png';
import tailwind from '../../../public/img/tailwind-css.png';
import js from '../../../public/img/js.png';
import pug from '../../../public/img/pug.png';
import mongo from '../../../public/img/mongo.png';
import node from '../../../public/img/node.png';
import live from '../../../public/img/live.png';

export default function Projects() {
    return (
        <div className="projects flex flex-col items-center justify-start mt-10 mb-20 space-y-5 max-w-full">
            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        Custom Memory Allocator <img src={c} alt="C" className="inline-block w-6 h-6"/>
                    </a> 
                </h3>
                <p className="text-white text-justify"> 
                    A custom memory allocator implementation in C programming language. It includes functions for 
                    memory allocation (jalloc), block initialization (jcalloc), deallocation (jfree), and reallocation (jrealloc)
                </p>
                <a href="https://github.com/Jonathan03ant/memAlocator" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent text-white font-coding hover:bg-gray-400 py-1 px-1 my-3 border border-l-yellow-50 hover:border-transparent rounded ">
                        Source Code <IoArrowRedoOutline className="inline-block text-sm"/> 
                    </button>
                </a>
            </div>

            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/Linear-Alg-Lib' target="_blank" rel="noopener noreferrer"> 
                        Linear Algebra Library (In Progress) <img src={c} alt="C" className="inline-block w-6 h-6"/>
                    </a> 
                </h3>
                <p className="text-white text-justify"> 
                    A huge library for college level linear algebra operations. It includes functions for vector and matrix operations.
                    It also includes functions that are not implemented yet for solving systems of linear equations, finding eigenvalues and eigenvectors, and orthogonality.
                    It follows facade design pattern to make the library easy to use, customize and extend.
                </p>
                <a href="https://github.com/Jonathan03ant/Linear-Alg-Lib" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent text-white font-coding hover:bg-gray-400 py-1 px-1 my-3 border border-l-yellow-50 hover:border-transparent rounded ">
                        Source Code <IoArrowRedoOutline className="inline-block text-sm"/>
                    </button>
                </a>
            </div>

            
            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/JobApplicationTracker' target="_blank" rel="noopener noreferrer"> 
                        Job Application Tracker (Jetzt) <IoArrowRedoOutline className="inline-block text-sm text-blue-700"/> <img src={live} alt="Live" className=" animate-blink inline-block w-12 h-15"/>
                        <div className='space-x-2'>
                            <img src={react} alt="React" className="inline-block w-6 h-6"/> 
                            <img src={firebase} alt="React" className="inline-block w-6 h-6"/> 
                            <img src={tailwind} alt="React" className="inline-block w-6 h-6"/>
                            <img src={js} alt="React" className="inline-block w-6 h-6"/>
                        </div>  
                    </a> 
                </h3>
                <p className="text-white text-justify"> 
                    A web application that allows users to track their job applications. It is built with React.js and uses Firebase as the backend. Users can easily add, edit, and remove job applications.
                    leveraging the power of Firebase to authenticate and provide real-time updates to users. Features include editing application status, adding notes, adding interview dates and adding 
                    a job to a watchlist section to easily keep track of a carrier that the user is interested in.
                </p>
                <p className="text-white text-justify"> 
                    19 Active Users | 50+ Job Applications Tracked.
                </p>
                <a href="https://github.com/Jonathan03ant/JobApplicationTracker" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent text-white font-coding hover:bg-gray-400 py-1 px-1 my-3 border border-l-yellow-50 hover:border-transparent rounded ">
                        Source Code <IoArrowRedoOutline className="inline-block text-sm"/>
                    </button>
                </a>
            </div>

            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/WebApps-COMP2406-TermProject' target="_blank" rel="noopener noreferrer"> 
                        ArtGram, Social Media Website <IoArrowRedoOutline className="inline-block text-sm text-blue-700 "/>
                        <div className='space-x-1'>
                            <img src={pug} alt="React" className="inline-block w-8 h-6"/> 
                            <img src={node} alt="React" className="inline-block w-10 h-10"/>
                            <img src={mongo} alt="React" className="inline-block w-10 h-10"/>
                            <img src={js} alt="React" className="inline-block w-6 h-6"/> 
                        </div>  
                    </a> 
                </h3>
                <p className="text-white text-justify"> 
                    A social media website that allows users to share their favorite art pieces. It is built with Pug, CSS and JavaScript for the frontend and Node.js, Express.js, and MongoDB for the backend.
                    It includes features such as sessions, authentication, authorization, and CRUD operations.       
                </p>
                <a href="https://github.com/Jonathan03ant/WebApps-COMP2406-TermProject" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent text-white font-coding hover:bg-gray-400 py-1 px-1 my-3 border border-l-yellow-50 hover:border-transparent rounded ">
                        Source Code <IoArrowRedoOutline className="inline-block text-sm"/>
                    </button>
                </a>
            </div>

            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://cvbuilder-c187d.web.app/' target="_blank" rel="noopener noreferrer"> 
                        Jake's Resume Maker <IoArrowRedoOutline className="inline-block text-sm text-blue-700"/> <img src={live} alt="Live" className=" animate-blink inline-block w-12 h-15"/>
                    </a> 
                    <div className='space-x-1'>
                        <img src={pug} alt="React" className="inline-block w-8 h-6"/> 
                        <img src={node} alt="React" className="inline-block w-10 h-10"/>
                        <img src={mongo} alt="React" className="inline-block w-10 h-10"/>
                        <img src={js} alt="React" className="inline-block w-6 h-6"/> 
                    </div> 
                </h3>
                <p className="text-white text-justify"> 
                    A web application that allows users to create a resume. It is built with React.js and uses JsPdf library to generate a pdf file of the resume. users can easily edit, add and remove sections of the resume.
                </p>
                <a href="https://github.com/Jonathan03ant/CVBuilder" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent text-white font-coding hover:bg-gray-400 py-1 px-1 my-3 border border-l-yellow-50 hover:border-transparent rounded ">
                        Source Code <IoArrowRedoOutline className="inline-block text-sm"/>
                    </button>
                </a>
                
            </div>

            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/Simple-Weather-App' target="_blank" rel="noopener noreferrer"> 
                        Weather App <IoArrowRedoOutline className="inline-block text-sm text-blue-700 "/>
                    </a> 
                </h3>
                <p className="text-white text-justify"> 
                    A simple web application that allows users to check the weather in any city. It is built with React.js and uses OpenWeatherMap API to fetch the weather data. Users can easily check the weather in any city in the world.
                </p>
                <a href="https://github.com/Jonathan03ant/Simple-Weather-App" target="_blank" rel="noopener noreferrer">
                    <button className="bg-transparent text-white font-coding hover:bg-gray-400 py-1 px-1 my-3 border border-l-yellow-50 hover:border-transparent rounded ">
                        Source Code <IoArrowRedoOutline className="inline-block text-sm"/>
                    </button>
                </a>
            </div>

            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        Podify <img src={cpp} alt="C++" className="inline-block w-6 h-6"/>
                    </a> 
                </h3>
                <p className="text-white text-justify"> 
                    A podcast network that allows users to discover and enjoy a wide range of podcasts and episodes (ASCII Representation). 
                    It features a search function that enables easy episode selection based on specific criteria to create personalized playlists. 
                    Podify utilizes ASCII art to represent audio-only and audio-video experiences,replacing traditional media formats.
                    The project incorporates various software engineering concepts like operator overloading, templates, multiple inheritance, 
                    factories, and the strategy pattern to ensure a seamless user experience.
                </p>
            </div>

            <div className='font-coding mr-1 ms-2 p-4 pl-6 hover:bg-gray-400 hover:bg-opacity-5 max-w-full'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        C++ Web Server <img src={cpp} alt="C++" className="inline-block w-6 h-6"/>
                    </a> 
                </h3>
                <p className="text-white text-justify"> 
                    An open source C++ modular webserver that supports HTTP/1.1. It is designed to be fast, reliable, and customizable.
                    Allows for the creation of custom modules to handle requests to create customizable websites.                
                </p>
            </div>


            
    
            </div>
    )
}
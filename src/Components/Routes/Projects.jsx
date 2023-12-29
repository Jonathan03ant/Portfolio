import React from 'react';

export default function Projects() {
    return (
        <div className="projects flex flex-col items-center justify-start ml-57 mt-40 mr-20">
            <div className='font-coding mr-7 ms-2'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        Custom Memory Allocator, C 
                    </a> 
                </h3>
                <p className="text-white"> 
                    A custom memory allocator implementation in C programming language. It includes functions for 
                    memory allocation (jalloc), block initialization (jcalloc), deallocation (jfree), and reallocation (jrealloc)
                </p>
            </div>

            <div className='font-coding mr-7 ms-2'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        Linear Algebra Library, C (In Progress)
                    </a> 
                </h3>
                <p className="text-white"> 
                    A huge library for college level linear algebra operations. It includes functions for vector and matrix operations.
                    It also includes functions that are not implemented yet for solving systems of linear equations, finding eigenvalues and eigenvectors, and orthogonality.
                    It follows facade design pattern to make the library easy to use, customize and extend.
                </p>
            </div>

            <div className='font-coding mr-7 ms-2'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        C++ Web Server 
                    </a> 
                </h3>
                <p className="text-white"> 
                    An open source C++ modular webserver that supports HTTP/1.1. It is designed to be fast, reliable, and customizable.
                    Allows for the creation of custom modules to handle requests to create customizable websites.                
                </p>
            </div>

            <div className='font-coding mr-7 ms-2'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        ArtGram, Social Media Website 
                    </a> 
                </h3>
                <p className="text-white"> 
                    A social media website that allows users to share their favorite art pieces. It is built with Pug, CSS and JavaScript for the frontend and Node.js, Express.js, and MongoDB for the backend.
                    It includes features such as sessions, authentication, authorization, and CRUD operations.       
                </p>
            </div>

            <div className='font-coding mr-7 ms-2'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        Jakes Resume Maker
                    </a> 
                </h3>
                <p className="text-white"> 
                    A web application that allows users to create a resume. It is built with React.js and uses JsPdf library to generate a pdf file of the resume. users can easily edit, add and remove sections of the resume.
                </p>
            </div>

            <div className='font-coding mr-7 ms-2'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        My Job Application Tracker
                    </a> 
                </h3>
                <p className="text-white"> 
                    A web application that allows users to track their job applications. It is built with React.js and uses Firebase as the backend. Users can easily add, edit, and remove job applications.
                    It leverages the power of Firebase to authenticate and provide real-time updates to the user. Features include editing application status, adding notes, and adding interview dates and adding 
                    a job to a watchlist section to easily keep track of a carrier that the user is interested in.
                </p>
            </div>

            <div className='font-coding mr-7 ms-2'>
                <h3 className=" text-white font-coding font-bold text-2xl hover:text-slate-400 hover:underline my-3">
                    <a href='https://github.com/Jonathan03ant/memAlocator' target="_blank" rel="noopener noreferrer"> 
                        Weather App
                    </a> 
                </h3>
                <p className="text-white"> 
                    A simple web application that allows users to check the weather in any city. It is built with React.js and uses OpenWeatherMap API to fetch the weather data. Users can easily check the weather in any city in the world.
                </p>
            </div>

            
    
            </div>
    )
}
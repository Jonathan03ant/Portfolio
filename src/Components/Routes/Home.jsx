import React from 'react';
import {Typewriter} from 'react-simple-typewriter';


export default function Home() {

    const words = [
        'A student at Carleton\n',
        'Looking for my first COOP\n',
        'I Love coding in C and C++\n',
        'And I am learning React\n',
        'I am a team player\n',
        'continuous learner\n',
        'a hard worker\n',
        'and a Problem Solver\n',
    ];

    return (
        <div className="projects flex flex-col items-center justify-start mt-10 mb-20 space-y-5 max-w-full">
            <div className=' mr-7 ms-2'>
                <h1 className='font-zillo text-white text-3xl'>
                    Hello My name is Jonathan 
                </h1>
                
                <h1 className='font-zillo text-white text-2xl'>
                    <br/>
                    <span> 
                    <Typewriter
                        words={words}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                   
                </h1>
            </div>
        </div>
    )
}

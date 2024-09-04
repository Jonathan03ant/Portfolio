import React from 'react';
import {Typewriter} from 'react-simple-typewriter';
import { FaAnglesLeft } from "react-icons/fa6";


export default function Home() {

    const words = [
        "Jonathan's Resume\n",
        'Check Out My Projects Section\n',
    ];

    return (
        <div className="projects flex flex-col items-center justify-start mt-10 mb-20 space-y-5 max-w-full">
            <div className=' mr-7 ms-2'>
            <h1 className='font-zillo text-white text-2xl mb-10'>
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
                <h1 className='font-zillo text-white text-3xl'>
                    Hello My name is Jonathan 
                </h1>
                <div>

                </div>
            </div>
        </div>
    )
}

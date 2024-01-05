import React from 'react';
import {Typewriter} from 'react-simple-typewriter';
import sign from '../../../public/img/sign.png';

export default function About() {
    const words = [
        'About Me\n',
    ]
    return (
        <div className='text-white font-coding justify-start items-center md:ml-36 mx-16 space-y-5 mb-32' style={{textAlign: 'justify'}}>
            <h1 className='text-3xl '>
                <Typewriter
                    words={words}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>

            <div className="flex flex-col md:flex-row md:justify-start">
                <div className="md:w-2/3 space-y-5">
                    <p>
                        My journey into programming began with my first high school class in C,
                        a legendary programming language often considered the precursor to many modern programming languages. This introduction sparked a lifelong love for coding within me.
                    </p>
                    <p>
                        As I delved deeper into C, I realized its significance in shaping the foundations of computer programming. It transported me back to the 1980s when C was highly influential, perhaps the "ChatGPT" of its time.
                        Learning C wasn't easy, but it transformed my understanding of programming principles and enabled me to adapt quickly to new languages and frameworks.
                    </p>

                    <p>
                        During my first and second year at Carleton University majoring in Computer Science, I utilized programming tools to solve problems and simplify my life. For instance, I automated my resume generation, saving time and effort. 
                        I also developed a job tracking application to stay organized during my job search. This application, named 'Jetzt,' revolutionized my job search process by streamlining it and providing invaluable insights into the world of Software as a Service (SaaS).

                    </p>

                    <p>
                        Inspired by my project experiences, a deep-seated passion for knowledge-sharing and collaboration has taken root within me. Over the years, 
                        I have come to realize that genuine growth as a programmer is not solely derived from technical prowess but also from the power of teamwork and collective effort. 
                        As I advance in my education, I am eagerly seeking my first Co-op opportunity, eager to join a team of seasoned software engineers. My goal is to absorb knowledge, 
                        contribute my skills, and actively participate in the creation of innovative projects.
                    </p>

                    <p>
                        Together, we can build upon the solid foundations of C and shape the future of technology. 
                        Thank you for your time; I hope to be considered for an opportunity to contribute to your team.
                    </p>
                    <img src={sign} alt="Sign" style={{width: '400px', height: '300px'}} />
                </div>
            </div>
        </div>
    )
}
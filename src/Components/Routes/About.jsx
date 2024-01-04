import React from 'react';
import {Typewriter} from 'react-simple-typewriter';
import sign from '../../../public/img/sign.png';

export default function About() {
    const words = [
        'About Me\n',
    ]
    return (
        <div className='text-white font-coding justify-start items-center mx-40 space-y-5' style={{textAlign: 'justify'}}>
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
            <p>
                 My journey into programming began with my first high school class on C, 
                 a legendary programming language considered the father of all modern programming languages. This introduction sparked a lifelong love for coding within me.
            </p>
            <p>
                As I delved deeper into C, I realized its significance in shaping the foundations of computer programming. It transported me back to the 1980s when C was highly influential, perhaps the "ChatGPT" of its time.
                Learning C wasn't easy, but it transformed my understanding of programming principles and enabled me to adapt quickly to new languages and frameworks.
            </p>

            <p>
                During my first and second year Carleton University, majoring in Computer Science, I utilized programming tools to solve problems and simplify my life. For instance, I automated my resume generation, saving time and effort. 
                I also developed a job tracking application to stay organized during my job search. This application, called "Jetzt," is streamlining the process of my job search, and provided me valuable insights into SaaS.

            </p>

            <p>
                Driven by my project experiences, I developed a passion for sharing knowledge and collaborating with others. I recognized that true growth as a programmer comes from both technical skills and teamwork. 
                Now, I am eager to gain my first co-op experience, Hoping to join a team of experienced software engineers to learn from and to be able to contribute to innovative projects.
            </p>

            <p>
                Together, we can build upon the solid foundations of C and shape the future of technology. 
                Thank you for your time; I hope to be considered for an opportunity to contribute to your team.
            </p>
            <img src={sign} alt="Sign" style={{width: '400px', height: '300px'}} />
        </div>
    )
}
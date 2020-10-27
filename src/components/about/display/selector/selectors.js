import React from 'react';
import tools from './info/tools';
import work from './info/work';
import education from './info/education';
import { papers, awards } from './info/papers-awards';
import Itemizer from '../../../misc/Itemizer/Itemizer';

function age(dob) { 
    const birth =  new Date(dob);
    let diff_ms = Date.now() - birth.getTime();
    let age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


const selectors  = [
    {   
        title:'About Me',
        description:'', //'[Human] : [After All]',
        icon: <i class="fas fa-address-card"></i>,
        visor:{
            title: 'Welcome! My Name is Mariano L. Acosta',
            description: 
                        <>
                            <p style={{marginBottom:30}}>
                                Born in 1993, I'm a {age('08/13/1993')} years old Engineer from Argentina.
                                In 2018, I graduated from the <a href='https://www.fi.mdp.edu.ar/' target='_blank'>University of Mar del Plata </a> 
                                with an Engineering Degree in Electronics, which is equivalent to a Bachelors + Master degree.
                                Also, I had the opportunity to be an exchange student at <a href="https://vt.edu/" target='_blank'>Virginia Tech</a> (U.S)
                                 with a Fulbright Scholarship.
                            </p>
                            <p style={{marginBottom:30}}>
                                {`During my career, I've worked in a variety of fields, ranging from Avionics Systems, Power Electronics, Embedded Systems,
                                Machine Learning, Signal Processing and Full-Stack Development.` }
                            </p>
                            <p style={{marginBottom:30}}>
                                {`Recently, in 2020, I've decided to go all-in with Computer Science and Software Engineering.
                                I've been in love with computers and mathemathics since I was in kindergarden, so this career change felt only natural.` }
                            </p>
                        </>,
            menu:{
                isValid: false,
                content: undefined
            }
        }
    },
    {
        title:'Tools & Abilities',
        description:'', //'[Id Est] : [Polyglot]',
        icon: <i class="fas fa-laptop-code"></i>,
        visor:{
            title: 'Proficient in Technology:',
            description: undefined,
            menu:{
                isValid: true,
                content: tools,
                subtitle: false
            }
        }
    },
    {
        title:'Education',
        description:'', //'[Shoulders] : [Giant]',
        icon: <i class="fas fa-graduation-cap"></i>,
        visor:{
            title: 'Graduated from College, Life-long learner',
            description:undefined,
            menu:{
                isValid: true,
                content: education
            }
        }
    },
    {
        title:'Work Experience',
        description:'', //'[Leave] : [Mark]',
        icon: <i class="fas fa-suitcase"></i>,
        visor:{
            title: `Places where I've Worked`,
            description:undefined,
            menu:{
                isValid: true,
                content: work
            }
        }
    },
    {
        title:'Papers & Awards',
        description:'', //[Work Harder] : [Make it Better]',
        icon: <i class="fas fa-award"></i>,
        visor:{
            title: 'Ipsum commodo tempor ea consectetur',
            description:<><h3 style={{marginTop:-20}}>Papers:</h3><Itemizer items={papers}/><h3>Awards:</h3><Itemizer items={awards}/></>,
            menu:{
                isValid: false,
                content: undefined
            }
        }
    },
    {
        title:'Hobbies & Interests',
        description:'' ,//'[Soul Body] : [Ecstasy]',
        icon: <i class="fas fa-gamepad"></i>,
        visor:{
            title: 'Speerunning, Electronic Music & Books',
            description:
                        <>
                            <p style={{marginBottom:20}}>I do streams about programming and video game speedrunning on my 
                                                            <a style={{cursor:'pointer'}} href='https://www.twitch.tv/mariandevs' target ='blank'> Twitch Account</a>.</p>
                            <p style={{marginBottom:20}}> Electronic music has been my passion all my life and I've produced 
                                                          music since I was 14. Furthermore, I studied piano and classical music in 
                                                          a local conservatory for two years.
                            </p>
                            <p style={{marginBottom:20}}> Also, I enjoy reading physical books, especially challenging ones. My main interests include anthropology,
                                biographies, biology, economics, mathematics, neuroscience, psychology, philosophy and sociology. 
                                My favorite genres are science fiction, thriller and Mystery. Currently, I'm half-way through <strong>'Human Action' </strong>
                                by <strong>Ludwig Von Mises</strong> and I'm planning to read next <strong>'Gödel Escher Bach' </strong> 
                                by <strong>Douglas Hofstadter</strong>. You can check my Goodreads account <a style={{cursor:'pointer'}} href='https://www.goodreads.com/mlacosta' target ='blank'>here</a>.
                            </p>
                        </>,

            menu:{
                isValid: false,
                content: undefined
            }
        }
    },

]

export default selectors;

/*
intj
twitch
music production, electronics music and retro music
enjoy reading about diversed topics (list) good reads
keep learning with moocs
keep working in personal projects & ideas
games, audio plugins, emulators,

retro gaming, I practice Speedruns time to time


I mantain a Twitch account where I usually do stream about software development and casual gaming,

 produced Electronic Music since I was 14. I enjoy remixing populars song and 
*/
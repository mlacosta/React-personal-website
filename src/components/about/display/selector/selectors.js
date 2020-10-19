import React from 'react';
import 'react-typist/dist/Typist.css';
import Menu from '../../menu/menu';

function age(dob) { 
    const birth =  new Date(dob);
    let diff_ms = Date.now() - birth.getTime();
    let age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


const languages = [
                    {name: 'Full-Stack Development',
                    title: 'Nisi ex ut proident',
                    description:'Occaecat laborum laboris',
                    content: ['Javascript (ES6)','React.js','Node.js','Express.js','HTML & CSS','Mocha & Chai','SQLite','MongoDB','TCP/IP stack','REST/CRUD servers']
                    },
                    {name: 'Machine Learning',
                    content: ['Python','Tensorflow','Keras','Numpy','Pandas','Scikit-Learn'],
                    title: 'Reprehenderit labore duis',
                    description:'Occaecat laborum laboris',
                    },
                    {name: 'Embedded Systems',
                    content: ['C/C++','React.js','VHDL', 'RTOS','Xilinx/HLS'],
                    title: 'Et anim sunt magna tempor',
                    description:'Occaecat laborum laboris',
                    },
                    {name: 'Electronics',
                    content: ['Control Systems','PCB Design','Power Systems','DSP ','Matlab','NL5/Spice'],
                    title: 'Non commodo ullamco dolore',
                    description:'Occaecat laborum laboris',
                    }
                ]
                        
const work = [
                {name: 'Coderhouse',
                title: 'React JS Teacher',
                description:'August 2020 - Present',
                content: ['Javascript (ES6)','React.js','Node.js','Express.js']
                },
                {name: 'Lyrtron S.A',
                content: ['Python','Tensorflow','Keras','Numpy','Pandas','Scikit-Learn'],
                title: 'Power Electronics Engineer',
                description:'September 2018 - April 2019',
                },
                {name: 'ICyTE',
                content: ['C/C++','React.js','VHDL', 'RTOS','Xilinx/HLS'],
                title: 'Embedded Systems Engineer',
                description:'Occaecat laborum laboris',
                },
                {name: 'INVAP S.E',
                content: ['Control Systems','PCB Design','Power Systems','DSP ','Matlab','NL5/Spice'],
                title: 'Avionics Engineer (Internship)',
                description:'January 2016 - March 2016',
                },
                {name: 'UNMDP',
                content: ['C/C++','React.js','VHDL', 'RTOS','Xilinx/HLS'],
                title: 'Professor in Experimental Physics',
                description:'November 2014 – November 2017',
                },
            ]

const education = [
                {name: 'UNMDP',
                title: 'Degree in Electronics Engineering',
                description:'April 2012 - August 2018',
                content: ['Javascript (ES6)','React.js','Node.js','Express.js','HTML & CSS','Mocha & Chai','SQLite','MongoDB','TCP/IP stack','REST/CRUD servers']
                },
                {name: 'Virginia Tech (U.S)',
                content: ['Python','Tensorflow','Keras','Numpy','Pandas','Scikit-Learn'],
                title: 'Exchange Student - Fulbright Scholarship',
                description:'January 2017 - March 2017',
                },
                {name: 'ICTP (Italy)',
                content: ['C/C++','React.js','VHDL', 'RTOS','Xilinx/HLS'],
                title: 'Advanced School on Systems On Chip',
                description:'November 2017 - Dicember 2017',
                },
                {name: 'Codecademy',
                content: ['Control Systems','PCB Design','Power Systems','DSP ','Matlab','NL5/Spice'],
                title: 'Full-Stack Engineer Career Path',
                description:'May 2020 - Ongoing',
                },
                {name: 'Stanford Online',
                content: ['Control Systems','PCB Design','Power Systems','DSP ','Matlab','NL5/Spice'],
                title: 'Algorithms Specialization',
                description:'June 2020 - November 20',
                },
                {name: 'DeepLearning.io',
                content: ['Control Systems','PCB Design','Power Systems','DSP ','Matlab','NL5/Spice'],
                title: 'Deep Learning Specialization',
                description:'June 2020 - November 20',
                }
            ]


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
                        </>
        }
    },
    {
        title:'Tools & Abilities',
        description:'', //'[Id Est] : [Polyglot]',
        icon: <i class="fas fa-laptop-code"></i>,
        visor:{
            title: 'Select one field:',
            description: <Menu content = {languages}/>,
            menu:{
                isValid: true,
                content: languages
            }
        }
    },
    {
        title:'Work Experience',
        description:'', //'[Leave] : [Mark]',
        icon: <i class="fas fa-suitcase"></i>,
        visor:{
            title: `Places where I've Worked`,
            description:< Menu content = {work}/>,
            menu:{
                isValid: true,
                content: work
            }
        }
    },
    {
        title:'Education',
        description:'', //'[Shoulders] : [Giant]',
        icon: <i class="fas fa-graduation-cap"></i>,
        visor:{
            title: 'Aliqua occaecat est cillum.',
            description:< Menu content = {education}/>,
            menu:{
                isValid: true,
                content: education
            }
        }
    },
    {
        title:'Papers & Awards',
        description:'', //[Work Harder] : [Make it Better]',
        icon: <i class="fas fa-award"></i>,
        visor:{
            title: 'Ipsum commodo tempor ea consectetur aliquip',
            description:'Do exercitation qui cillum irure ex qui. Anim pariatur.'+ 
                        'Commodo est tempor irure anim cillum ipsum consequat esse id deserunt qui excepteur.'+
                        ' Ipsum officia est occaecat veniam consequat laboris non ut nisi dolore Lorem Lorem fugiat adipisicing.'+
                        ' Eiusmod nostrud Lorem tempor exercitation ex aliquip non non veniam aliquip non tempor pariatur non.'
        }
    },
    {
        title:'Hobbies & Interests',
        description:'' ,//'[Soul Body] : [Ecstasy]',
        icon: <i class="fas fa-gamepad"></i>,
        visor:{
            title: 'Non sint ex ea ad',
            description:'Do exercitation qui cillum irure ex qui. Anim pariatur.'+ 
                        'Commodo est tempor irure anim cillum ipsum consequat esse id deserunt qui excepteur.'+
                        ' Ipsum officia est occaecat veniam consequat laboris non ut nisi dolore Lorem Lorem fugiat adipisicing.'
        }
    },

]

export default selectors;
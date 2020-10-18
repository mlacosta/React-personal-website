import React from 'react';
import 'react-typist/dist/Typist.css';
import Menu from '../../menu/menu';


function age(dob) { 
    const birth =  new Date(dob);
    let diff_ms = Date.now() - birth.getTime();
    let age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


let selectors  = [
    {   
        
        title:'About Me',
        description:'[Human] : [After All]',
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
        title:'Languages & Frameworks',
        description:'[Id Est] : [Polyglot]',
        icon: <i class="fas fa-laptop-code"></i>,
        visor:{
            title: 'Select one field:',
            description: <Menu elements= {['Full-Stack Development','Machine Learning','Embedded Systems','Electronics']}
                               items = {['Javascript (ES6)','React.js','Node.js','Express.js','HTML & CSS','Mocha & Chai','SQLite','MongoDB','TCP/IP stack','REST/CRUD servers']}/>
        }
    },
    {
        title:'Tools & Abilities',
        description:'[Work Harder] : [Make it Better]',
        icon: <i class="fas fa-tools"></i>,
        visor:{
            title: 'Ipsum commodo tempor ea consectetur aliquip',
            description:'Do exercitation qui cillum irure ex qui. Anim pariatur.'+ 
                        'Commodo est tempor irure anim cillum ipsum consequat esse id deserunt qui excepteur.'+
                        ' Ipsum officia est occaecat veniam consequat laboris non ut nisi dolore Lorem Lorem fugiat adipisicing.'+
                        ' Eiusmod nostrud Lorem tempor exercitation ex aliquip non non veniam aliquip non tempor pariatur non.'
        }
    },
    {
        title:'Work Experience',
        description:'[Leave] : [Mark]',
        icon: <i class="fas fa-suitcase"></i>,
        visor:{
            title: 'Anim eiusmod elit excepteur dolor Lorem ut',
            description:'Do exercitation qui cillum irure ex qui. Anim pariatur.'+ 
                        'Commodo est tempor irure anim cillum ipsum consequat esse id deserunt qui excepteur.'+
                        ' Ipsum officia est occaecat veniam consequat laboris non ut nisi dolore Lorem Lorem fugiat adipisicing.'+
                        ' Eiusmod nostrud Lorem tempor exercitation ex aliquip non non veniam aliquip non tempor pariatur non.'
        }
    },
    {
        title:'Education',
        description:'[Shoulders] : [Giant]',
        icon: <i class="fas fa-graduation-cap"></i>,
        visor:{
            title: 'Aliqua occaecat est cillum.',
            description:`Incididunt nisi sint eu exercitation veniam. Nulla cillum et nisi amet est mollit nostrud 
                         consequat elit ex laborum et pariatur voluptate. Id adipisicing excepteur aliquip consectetur 
                        labore eiusmod mollit ipsum laborum commodo fugiat.`
        }
    },
    {
        title:'Hobbies & Interests',
        description:'[Soul Body] : [Ecstasy]',
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

import React from 'react';
import email from './components/mainBox/contact/icons/email.svg';
import github from './components/mainBox/contact/icons/github.svg';
import linkedin from './components/mainBox/contact/icons/linkedin.svg';
import twitch from './components/mainBox/contact/icons/twitch.svg';
import soundcloud from './components/mainBox/contact/icons/soundcloud.svg';


const links = [ { name:'Linkedin',
                  src: 'https://www.linkedin.com/in/mlacosta',
                  icon: linkedin
                },
                { name:'Github',
                  src: 'https://www.github.com/mlacosta',
                  icon: github
                },
                {
                  name: 'Soundcloud',
                  src: 'https://www.soundcloud.com/mlacosta64',
                  icon: soundcloud
                }
                ,
                { name:'Twitch',
                  src: 'https://www.twitch.tv/mariandevs',
                  icon: twitch
                },
                { name:'Email',
                  src: 'mailto:marianoacosta.003@gmail.com',
                  icon: email
                }
            ]

export default links;
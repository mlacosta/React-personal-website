
import React from 'react';
import email from './components/mainBox/contact/icons/email.svg';
import github from './components/mainBox/contact/icons/github.svg';
import linkedin from './components/mainBox/contact/icons/linkedin.svg';
import twitch from './components/mainBox/contact/icons/twitch.svg';
import soundcloud from './components/mainBox/contact/icons/soundcloud.svg';


const links = [ { name:'Linkedin',
                  src: 'https://www.linkedin.com/in/mlacosta',
                  icon: <i class="fab fa-linkedin-in"></i>
                },
                { name:'Github',
                  src: 'https://www.github.com/mlacosta',
                  icon: <i class="fab fa-github"></i>
                },
                {
                  name: 'Soundcloud',
                  src: 'https://www.soundcloud.com/mlacosta64',
                  icon: <i class="fab fa-soundcloud"></i>
                }
                ,
                { name:'Twitch',
                  src: 'https://www.twitch.tv/mariandevs',
                  icon: <i class="fab fa-twitch"></i>
                },
                { name:'Email',
                  src: 'mailto:marianoacosta.003@gmail.com',
                  icon: <i class="far fa-envelope"></i>
                }
            ]

export default links;
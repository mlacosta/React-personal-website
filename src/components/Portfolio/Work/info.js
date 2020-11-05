import tetris from './tetris.gif';
import n64 from './n64.png';
import pad from './synth.jpg'
import meli from './meli.png';
import dac from './dac.png';
import algo from './algo.png';
import nes from './nes.png';

const projects = [
    {name:'Marian Tetris',
     url:'Pariatur irure ut mollit cupidatat incididunt est mollit.',
     github:'In esse Lorem labore ipsum excepteur',
     description: `Aliquip aliqua qui do eu exercitation nulla ipsum excepteur consequat dolor culpa. 
     Fugiat officia esse ipsum eu velit eu enim nisi ea. Cillum velit nulla aute dolore nisi aute ad proident duis est tempor. 
     Consectetur consectetur veniam tempor exercitation ipsum do do labore commodo et voluptate nostrud. Sit culpa est ea nostrud elit. 
     Fugiat enim consequat voluptate qui labore sit reprehenderit dolore enim.`,
     tools:'Javascript, HTML Canvas, CSS',
     photo: tetris
    },    
    {name:'Marian NES (Coming Soon!)',
    url:'Pariatur irure ut mollit cupidatat incididunt est mollit.',
    github:'In esse Lorem labore ipsum excepteur',
    description: `Aliquip aliqua qui do eu exercitation nulla ipsum excepteur consequat dolor culpa. 
    Fugiat officia esse ipsum eu velit eu enim nisi ea. Cillum velit nulla aute dolore nisi aute ad proident duis est tempor. 
    Consectetur consectetur veniam tempor exercitation ipsum do do labore commodo et voluptate nostrud. Sit culpa est ea nostrud elit. 
    Fugiat enim consequat voluptate qui labore sit reprehenderit dolore enim.`,
    tools:'React.js, Java, Client-Server, Hardware Emulation',
    photo: nes
    },
    {name:'Delta Sigma Digital-to-Analog Converter',
    url:'Pariatur irure ut mollit cupidatat incididunt est mollit.',
    github:'In esse Lorem labore ipsum excepteur',
    description: `Aliquip aliqua qui do eu exercitation nulla ipsum excepteur consequat dolor culpa. 
    Fugiat officia esse ipsum eu velit eu enim nisi ea. Cillum velit nulla aute dolore nisi aute ad proident duis est tempor. 
    Consectetur consectetur veniam tempor exercitation ipsum do do labore commodo et voluptate nostrud. Sit culpa est ea nostrud elit. 
    Fugiat enim consequat voluptate qui labore sit reprehenderit dolore enim.`,
    tools:'Arduino, Python, FreePie, Electronics',
    photo: dac
    },    
    {name:'Algorithmic Challenges',
    url:'Pariatur irure ut mollit cupidatat incididunt est mollit.',
    github:'In esse Lorem labore ipsum excepteur',
    description: `Aliquip aliqua qui do eu exercitation nulla ipsum excepteur consequat dolor culpa. 
    Fugiat officia esse ipsum eu velit eu enim nisi ea. Cillum velit nulla aute dolore nisi aute ad proident duis est tempor. 
    Consectetur consectetur veniam tempor exercitation ipsum do do labore commodo et voluptate nostrud. Sit culpa est ea nostrud elit. 
    Fugiat enim consequat voluptate qui labore sit reprehenderit dolore enim.`,
    tools:'Arduino, Python, FreePie, Electronics',
    photo: algo
   },
   {name:'N64 Controller (100% sensitivity)',
   url:'Pariatur irure ut mollit cupidatat incididunt est mollit.',
   github:'In esse Lorem labore ipsum excepteur',
   description: `Aliquip aliqua qui do eu exercitation nulla ipsum excepteur consequat dolor culpa. 
   Fugiat officia esse ipsum eu velit eu enim nisi ea. Cillum velit nulla aute dolore nisi aute ad proident duis est tempor. 
   Consectetur consectetur veniam tempor exercitation ipsum do do labore commodo et voluptate nostrud. Sit culpa est ea nostrud elit. 
   Fugiat enim consequat voluptate qui labore sit reprehenderit dolore enim.`,
   tools:'Arduino, Python, FreePie, Electronics',
   photo: n64
   },
   {name:'MeLi Data Challenge 2019',
   url:'Pariatur irure ut mollit cupidatat incididunt est mollit.',
   github:'https://github.com/mlacosta/MeLi-Data-Challenge-2019-LSTM-CNN-Ensemble',
   description: `I developed a predictive system for product classification with 1588 different categories. Using Natural Language Processing (NLP)
    combined with Deep Learning, I was able to analyze over two million product descriptions from Mercado Libre and predict new cases with a balanced
     accuracy of 89,76%.The final model consists of a Neural Network ensemble, a combination of Long Short Term Memory RNNs (LSTM)
    and Convolutional Nets (CNN). Each sub-system was trained independently on different subset of the dataset. 
    Then, to make the final prediction, each output is combined using weighted sums.`,
   tools:'Keras, Tensorflow, Python, LSTM, CNN',
   photo: meli
  }
]

export default projects;
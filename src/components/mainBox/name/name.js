import  React, { useState, useEffect} from 'react';
import Typist from 'react-typist';
import './name.css'
import 'react-typist/dist/Typist.css';



function Name( { colors, width }){
    const myName =  width > 700 ? 'Mariano L. Acosta ' : 'Mariano Acosta ' ;
    const firstTitle = 'Software Developer ';
    const secondTitle = 'Electronics Engineer ';
    
    let nameStyle = {
        color: colors.text01
    }
    let titleStyle = {
        color: colors.text02,
        fontWeight: '300'
    }

    let delay1 = 1000;
    let delay2 = 1500 + delay1;
    let delay3 = delay2 + 1500;

    return(
        <div className='Name' >   
                <h1 id='myName' style={nameStyle}>
                    <Typist cursor={{element:' █',hideWhenDone: true}}>
                        <Typist.Delay ms={delay1} />
                        {myName}
                    </Typist>
                </h1>
                <div id="profession">
                    <h2 style={titleStyle}>
                        <Typist cursor={{element:' █',hideWhenDone: true}}>
                            <Typist.Delay ms={delay2} />
                            {firstTitle}
                        </Typist>
                    </h2>
                    <h2 style={titleStyle}>
                        <Typist cursor={{element:' █',hideWhenDone: true}}>
                            <Typist.Delay ms={delay3} />
                            {secondTitle}
                        </Typist>
                    </h2>
                </div>
                <br/>
                <br/>
                <br/>
                <h3 id='myName' style={nameStyle}>
                    <Typist cursor={{element:' █',blink:true}}>
                        <Typist.Delay ms={delay3 + 600 + 1000} />
                        {'Press any key to continue: '}
                    </Typist>
                </h3>
        </div>
    );
}

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
  
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    // Add event listeners
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return keyPressed;
}

export default Name;
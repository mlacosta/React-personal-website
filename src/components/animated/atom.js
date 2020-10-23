import React from 'react';
import './atom.css';


function Atom(){
    return(
        <svg width="200" height="200">
            <g>
                <ellipse cx="100" cy="100" rx="20" ry="7" />
                <ellipse cx="100" cy="100" rx="20" ry="7" transform="rotate(60, 100, 100)" />
                <ellipse cx="100" cy="100" rx="20" ry="7" transform="rotate(120, 100, 100)" />
                <circle cx="100" cy="100" r="4" />
            </g>
        </svg>
    )
}

export default function AtomBar(){
    return(
        <div className="AtomBar">
            <Atom/>
            <a href="https://reactjs.org/" target='_blank'>
                <span id='react-msg'>Coded with React.js</span>
            </a>
        </div>
    )
}



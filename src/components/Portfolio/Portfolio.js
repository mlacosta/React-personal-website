import React, {useState, useEffect} from 'react';
import Project from './Project/Project';
import Quad from './Quad/Quad';
import projects from './Work/info';
import './Portfolio.css';
import Version from '../mainBox/version/version';
import Debug from '../debug-window/debug-window';

export default function Portfolio({colors}){

	let [work,setWork] = useState(projects);
	let [others,setOthers] = useState([]);
	const portfolio = {
		margin:'-50px 0',
		display:'flex',
		justifyContent:'center'
	}
	const title = {
		margin:'50px 0',
		color:colors.text01,
		fontWeight:300,
		fontSize:'2.4rem',
		textAlign:'center'
	}

	const debug ={
		position:'fixed',
		left:20,
		color:colors.text03
	}

	return(	
		<>
			<Version colors = {colors} style = {{left:0, position:'fixed'}}/>
			<Debug style = {debug}/>
			<h1 id='portfolio-title' style={title}>Projects</h1>
			<div className="portfolio" style={portfolio}>
				<div className="portfolio-upper" style={{padding:0}}>
					{work.map( (value,num) =>{return (<Project {...{value,num,colors}}/>)})}
				</div>
				<div className="portfolio-lower">
					<Quad work = {others}/>
				</div>
			</div>
		</>
	)
}

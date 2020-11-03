import React, {useState, useEffect} from 'react';
import Project from './Project/Project';
import Quad from './Quad/Quad';

let projects = []

export default function Portfolio(){

	let [work,setWork] = useState(projects);
	let [others,setOthers] = useState([]);

	return(	
		<div className="portfolio">
			<div className="upper">
				{work.map( (value,num) =>{return (<Project {...{value,num}}/>)})}
			</div>
			<div className="lower">
				<Quad work = {others}/>
			</div>
		</div>
	)
}

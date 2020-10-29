import React from 'react';


export default function Itemizer( {items } ){
	
	let key = 0
	let anchor = {
		cursor:'pointer'
	} 
	return(
		<ul className="itemizer" >
			{items.map((item)=>{
				key+=1;
				let comp = item.link ? <a href={item.link} target='_blank'>{item.content}</a> : item.content;
				return <li {...{key}}>{comp}</li>
			})}
		</ul>
	)
}

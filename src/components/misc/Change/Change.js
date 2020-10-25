import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

export default function Change({icon, msg, onClick, colors}){
	
	const style = {
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height: 30,
		width: 80,
		border: `1px solid ${colors.border}`,
		borderRadius:10,
		cursor:'pointer',
		position:'fixed',
		top: 15,
		right:20,
		fontSize:'.6rem',
		paddingLeft:20,
		fontWeight:700
	}

	const bulb = {
		position:'absolute',
		top: 5,
		left: 5,
		fontSize:'1.2rem'
	}
	return(
		<div className='change' {...{style}}><FaRegLightbulb style = {bulb}/>{msg}</div>
	)
}

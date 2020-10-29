import React from 'react';
import { BsLightning } from 'react-icons/bs';
import Button01 from '../button01/Button01';

export default function Change({icon, msg, onClick, colors}){
	
	const style = {
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height: 30,
		width: 80,
		border: `1px solid ${colors.border}`,
		borderRadius:7,
		cursor:'pointer',
		position:'fixed',
		top: 15,
		right:20,
		fontSize:'.6rem',
		paddingLeft:20,
		fontWeight:700,
		color: colors.text02,
		backgroundColor:'transparent',
	}

	const bulb = {
		position:'absolute',
		top: 5,
		left: 5,
		fontSize:'1.2rem'
	}
	
	return(
		<button className='change' {...{style}} {...{onClick}}>< BsLightning style = {bulb}/>{msg}</button>
	)
}

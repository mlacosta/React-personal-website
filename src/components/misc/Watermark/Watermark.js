import React from 'react';


export default function Watermark({colors}){
	const style = {
		position:'fixed',
		color: colors.text01,
		right:20,
		bottom:30,
		fontSize:'.72rem'
	}

	return(
		<div className="watermark" {...{style}}>
			Designed entirely by Mariano L. Acosta
		</div>
	)
}

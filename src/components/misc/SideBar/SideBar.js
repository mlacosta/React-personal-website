import React from 'react';
import NavBar from '../NavBar/NavBar';
import Version from '../../mainBox/version/version';
import Debug from '../../debug-window/debug-window';

export default function SideBar( { colors }){
	const debug ={
		position:'fixed',
		left:20,
		color:colors.text03
	}

	return(<>
			<NavBar colors = {colors} />
			<Version colors = {colors} style = {{left:0, position:'fixed'}}/>
			<Debug style = {debug}/>
		   </>)
}

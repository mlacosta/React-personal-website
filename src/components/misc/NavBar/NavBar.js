import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ colors }){

	const style = {
		position:'fixed',
		display:'flex',
		flexDirection:'column',
		left:-14,
		top:200,
		justifyContent:'space-around',
		height:200,
		zIndex:200,
		textAlign:'left'
	}

	const navStyle = {
		color:colors.text01
	}

	return( <ul className='NavBar' {...{style}}>
				<NavLink className ='navLink' to='/' style = {navStyle}>Home</NavLink>
				<NavLink className ='navLink'to='/about' style = {navStyle}>About</NavLink>
				<NavLink className ='navLink'to='/portfolio' style = {navStyle}>Projects</NavLink>
				<NavLink className ='navLink'to='/contact' style = {navStyle}>Contact Me!</NavLink>
				<NavLink className ='navLink'to='/music' style = {navStyle}>Music</NavLink>
				<NavLink className ='navLink'to='/blog' style = {navStyle}>Blog</NavLink>
			</ul>)
}

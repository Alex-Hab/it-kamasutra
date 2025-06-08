import React from 'react';
import myImage_logo from '../img/logo.png';
import s from './Header.module.css';

const Header = () => {
	return <header className={s.header}>
		<img src={myImage_logo} alt="logo"></img>
	</header>
}

export default Header;
import logo from './logo.svg';
import React from 'react';
import './App.css';
import myImage_logo from './img/logo.png';
import myImage_sea from './img/sea.jpg';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Profile />
		</div>
	);
}


export default App;

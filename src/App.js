import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = (props) => {

	return (

		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Sidebar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/dialogs'
						element={<DialogsContainer />} />
					<Route path='/profile'
						element={<Profile />} />
					<Route path='/users' element={<UsersContainer />} />

					<Route path='/news' element={<News />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/music' element={<Music />} />
				</Routes>
			</div>
		</div>
	);
}


export default App;

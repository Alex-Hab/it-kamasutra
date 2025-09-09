import logo from './logo.svg';
import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/login';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileСontainer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {

	return (

		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			<Sidebar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/dialogs'
						element={<DialogsContainer />} />
					<Route path='/profile/:userId?'
						element={<ProfileContainer />} />
					<Route path='/users'
						element={<UsersContainer />} />
					<Route path='/login/'
						element={<LoginPage />} />

					<Route path='/news' element={<News />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/music' element={<Music />} />
				</Routes>
			</div>
		</div>
	);
}


export default App;

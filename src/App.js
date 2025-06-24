import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = (props) => {

<<<<<<< HEAD
	return (

		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Sidebar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/profile' element={<Profile state={props.state.profilePage} />} />
					<Route path='/dialogs' element={<Dialogs state={props.state.messagesPage} />} />
					<Route path='/news' element={<News />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/music' element={<Music />} />
				</Routes>
=======

	return (
		<Router>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<Profile posts={props.posts} />} />
						<Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
						<Route path='/news' element={<News />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/music' element={<Music />} />
					</Routes>
				</div>
>>>>>>> 8fd1e523bd90d239a14e6df7df5cfb41b7c6a870
			</div>
		</div>
	);
}


export default App;

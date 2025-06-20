import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = (props) => {


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
			</div>
		</Router>
	);
}


export default App;

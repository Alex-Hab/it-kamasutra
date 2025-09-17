import logo from './logo.svg';
import React, { Component } from 'react';
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
import HeaderContainer from './components/Header/HeaderContainer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from './components/Redux/app-reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';


class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

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
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	connect(mapStateToProps, { initializeApp }))(App);
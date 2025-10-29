import logo from './logo.svg';
import React, { Component, Suspense } from 'react';
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
import { Provider } from "react-redux";
import store from './components/Redux/redux-store';
import withSuspense from './hoc/withSuspense';
import { HashRouter } from 'react-router-dom';

class App extends Component {
	catchAllUnhandledErrors = (promiseRejectionEvent) => {

		alert("Some error occured");
		//console.error(promiseRejectionEvent);
	}
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);

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
							element={
								<Suspense fallback={<div><Preloader /></div>}>
									<DialogsContainer />
								</Suspense>
							} />
						<Route path='/profile/:userId?'
							element={
								<Suspense fallback={<div><Preloader /></div>}>
									<ProfileContainer />
								</Suspense>
							} />
						<Route path='/users'
							element={
								<Suspense fallback={<div><Preloader /></div>}>
									<UsersContainer />
								</Suspense>
							} />
						<Route path='/login/'
							element={<LoginPage />} />

						<Route path='/news' element={<News />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/music' element={<Music />} />
						<Route path='*' element={<div>404 not found</div>} />
					</Routes>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = compose(
	connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
	return <React.StrictMode >
		<Router basename={process.env.PUBLIC_URL}>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</Router>
	</React.StrictMode >
}

export default SamuraiJSApp;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './components/Redux/state';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export let rerenderEntireTree = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<Router>
				<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
			</Router>
		</React.StrictMode>
	);
};

export default rerenderEntireTree;
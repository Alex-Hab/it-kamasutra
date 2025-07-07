
import reportWebVitals from './reportWebVitals';
import store from './components/Redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './components/Redux/state';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


let rerenderEntireTree = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<Router>
				<App state={store.getState()} addPost={store.addPost.bind(store)}
					updateNewPostText={store.updateNewPostText.bind(store)} />
			</Router>
		</React.StrictMode>
	);
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


reportWebVitals(store.state);

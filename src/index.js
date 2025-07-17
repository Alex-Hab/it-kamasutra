
import reportWebVitals from './reportWebVitals';
import store from './components/Redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "./StoreContext"

let rerenderEntireTree = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<Router>
				<Provider store={store}>
					<App />
				</Provider>
			</Router>
		</React.StrictMode>
	);
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});


reportWebVitals(store.state);

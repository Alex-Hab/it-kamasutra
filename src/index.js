import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/Redux/state';
import { addPost } from './components/Redux/state';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

addPost('samuraiJS');




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
<<<<<<< HEAD
		<Router>
			<App state={state} />
		</Router>
=======
		<App posts={posts} dialogs={dialogs} messages={messages} />
>>>>>>> 8fd1e523bd90d239a14e6df7df5cfb41b7c6a870
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import profileReducer, { addPostActionCreator } from "./profile-reducer";
import deletePost from "./profile-reducer";
import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

let state = {
	posts: [
		{ id: 1, message: "Hi, how are you?", likesCount: 12 },
		{ id: 2, message: "It s my first post", likesCount: 11 },
		{ id: 3, message: "blabla", likesCount: 34 },
		{ id: 4, message: "Ku ku", likesCount: 23 }
	]
};
test('length of posts should be incremented', () => {
	//1, test data
	let action = addPostActionCreator("it-kamasutra.com");

	//2, action
	let newState = profileReducer(state, action);

	//3. expectetion ожидание
	expect(newState.posts.length).toBe(5)
});


test('message of new post should be correct', () => {
	//1, test data
	let action = addPostActionCreator("it-kamasutra.com");

	//2, action
	let newState = profileReducer(state, action);

	//3. expectetion ожидание
	expect(newState.posts[4].message).toBe("it-kamasutra.com")
});

test('after deleting of message should be decrement', () => {
	//1, test data
	let action = deletePost(1);

	//2, action
	let newState = profileReducer(state, action);

	//3. expectetion ожидание
	//expect(newState.posts.length).toBe(3);
});
test('after deleting lenth shouldnot be decrement if id is incorrect', () => {
	//1, test data
	let action = deletePost(1000);

	//2, action
	let newState = profileReducer(state, action);

	//3. expectetion ожидание
	expect(newState.posts.length).toBe(4);
});
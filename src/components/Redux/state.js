const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likesCount: 12 },
				{ id: 2, message: "It s my first post", likesCount: 11 },
				{ id: 3, message: "blabla", likesCount: 34 },
				{ id: 4, message: "Ku ku", likesCount: 23 }
			],
			newPostText: 'it-kamasutra.com',
		},
		messagesPage: {
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How is your it-kamasutra" },
				{ id: 3, message: "Yo" },
			],
			dialogs: [
				{ id: 1, name: "Дмитрий" },
				{ id: 2, name: "Андрей" },
				{ id: 3, name: "Света" },
				{ id: 4, name: "Алекандра" },
				{ id: 5, name: "Виктория" },
			],
		},
		sidebar: [
			{ id: 1, name: "Drug" },
			{ id: 2, name: "Alex" },
			{ id: 3, name: "Sveta" },
		]
	},
	_callSubscriber() {
		console.log('state changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;//наблюдатель - паттерн
	},

	/*addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostTex = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},*/
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostTex = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	},
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
})

export default store;
window.store = store;
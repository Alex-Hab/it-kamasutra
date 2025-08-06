const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	users: [
		{ id: 1, fillname: "Dmitry", status: 'I am a boss', location: { city: 'Minsk', country: 'Belarys' } },
		{ id: 2, fillname: "Gavril", status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
		{ id: 3, fillname: "Alexeu", status: 'I am a boss too', location: { city: 'Khabarovsk', country: 'Russia' } },

	],
	newPostText: 'it-kamasutra.com',
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {};
		}

		default:
			return state;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
})

export default usersReducer;
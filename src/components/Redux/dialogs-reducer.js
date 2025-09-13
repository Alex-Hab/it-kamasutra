const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: "Дмитрий" },
		{ id: 2, name: "Андрей" },
		{ id: 3, name: "Света" },
		{ id: 4, name: "Алекандра" },
		{ id: 5, name: "Виктория" },
	],
	messages: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How is your it-kamasutra" },
		{ id: 3, message: "Yo" },
	],
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 6, message: body }],
			}

		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;
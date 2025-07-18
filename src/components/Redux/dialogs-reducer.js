
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
	newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({ id: 6, message: body });
			return state;
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body
})

export default dialogsReducer;
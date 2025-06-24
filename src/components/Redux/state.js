let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, how are you?", likesCount: 12 },
			{ id: 2, message: "It s my first post", likesCount: 11 },
			{ id: 3, message: "blabla", likesCount: 34 },
			{ id: 4, message: "Ku ku", likesCount: 23 }
		],

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
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	}
	state.profilePage.posts.push(newPost);
}

export default state

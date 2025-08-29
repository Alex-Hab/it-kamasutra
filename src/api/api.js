import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "4adbfd9e-fe90-4944-90f8-b5cbf9200c2f"
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users ? page = ${currentPage}& count=${pageSize} `)
			.then(response => {
				return response.data;
			});
	}
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
	return instance.get(`follow ? page = ${currentPage}& count=${pageSize} `)
		.then(response => {
			return response.data;
		});
}
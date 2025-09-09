import axios from 'axios';
import { follow } from '../components/Redux/users-reducer';

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "4adbfd9e-fe90-4944-90f8-b5cbf9200c2f"
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize} `)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)

	},
	unfollow(userId) {
		return instance.delete(`unfollow/${userId}`)
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`);

	}
}


export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	}
}
import axios from 'axios'
const API_URL = 'http://localhost:8000';

export default class UsersService {
    
    constructor() {}

    async getUsers() {
		const url = '${API_URL}/api/users/';
		return axios.get(url).then(response => response.data);
	}
    
}
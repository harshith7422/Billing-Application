import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000', // Backend URL
    withCredentials: true, // Include cookies for auth
});

export default instance;

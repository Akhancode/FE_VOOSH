
import axios from 'axios';
// import { BASEURLAZURE } from '../utils/helper';

const BASEURLAZURE = 'http://localhost:9000'; // Replace with your API URL
const API_URL = `${BASEURLAZURE}/api/auth`; // Replace with your API URL

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data; 
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data; 
};

// export const logout = async () => {
//     await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
// };

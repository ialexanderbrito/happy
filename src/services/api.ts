import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-oficial.herokuapp.com',
});

export default api;

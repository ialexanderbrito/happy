import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-api.ialexanderbrito.dev',
});

export default api;

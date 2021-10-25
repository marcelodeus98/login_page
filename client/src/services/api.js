import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3335/',
})//BASE DO NODE

export default api;
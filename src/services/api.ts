import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3334',
  // baseURL: 'http://192.168.0.106:3334',
});

export default api;

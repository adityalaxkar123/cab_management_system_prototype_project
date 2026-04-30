import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  timeout: 15000,
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err.response?.data?.message || err.message || 'Network error';
    return Promise.reject(new Error(msg));
  }
);

export default API;

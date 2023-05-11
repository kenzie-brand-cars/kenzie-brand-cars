import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001',
})

const token = localStorage.getItem('kenzie-brand-cars:token');

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
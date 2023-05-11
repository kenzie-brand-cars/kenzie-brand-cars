import axios from 'axios'

const api = axios.create({
    baseURL: 'https://kenzie-brand-cars-api.cyclic.app',
})

const token = localStorage.getItem('kenzie-brand-cars:token');

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
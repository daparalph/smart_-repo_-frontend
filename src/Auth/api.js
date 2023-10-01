import axios from 'axios';

export const URL = 'https://smartrepo-c2d998e29865.herokuapp.com';

const api = axios.create({
  baseURL: 'https://smartrepo-c2d998e29865.herokuapp.com',
});

export default api;

import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export const userApi = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});
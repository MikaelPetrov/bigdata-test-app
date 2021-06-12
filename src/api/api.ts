import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://yts.mx/api/v2/list_movies.json',
});

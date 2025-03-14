import axios from 'axios';
// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'адрес сервера'; - проще
// правильнее apiUrl = env.apiUrl || 'http://localhost:8000' - webpack.config

export const $api = axios.create({
   baseURL: __API__,
});

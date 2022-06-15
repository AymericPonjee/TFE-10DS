import axios from 'axios';
import envs from '../config/env';
import {LOCAL_STORAGE_KEYS} from '../constants/models';
import {retrieveData} from '../utils/storage';

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers: {
    Authorization: '',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await retrieveData(LOCAL_STORAGE_KEYS.TOKEN);
    config.headers.Authorization = `Bearer ${token}`;
    //console.log('token ->', token)
    return config;
  },
  error => {
    console.log('[axios][interceptor][error] => ', error);
    return Promise.reject(error);
  },
);

export default axiosInstance;

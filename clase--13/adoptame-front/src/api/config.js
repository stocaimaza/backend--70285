import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://70285-adoptame-production.up.railway.app/',
  withCredentials: true,
});

export default axiosInstance;

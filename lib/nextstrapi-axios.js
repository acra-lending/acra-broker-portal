import axios from 'axios';

const axiosWithBaseURL = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default axiosWithBaseURL;
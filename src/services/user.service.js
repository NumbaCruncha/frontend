import axios from 'axios';
import authHeader from './auth-header';
import API_URL from '../constants/apiConstants';

const HttpsProxyAgent = require('https-proxy-agent');

const axiosDefaultConfig = {
    baseURL: 'https://api.sigma-analytics.co.nz/',
    proxy: false,
    httpsAgent: new HttpsProxyAgent('https://api.sigma-analytics.co.nz')
};

const axios = require ('axios').create(axiosDefaultConfig);


const getPublicContent = (props) => {
    return axios.get(API_URL + props);
};


const getUserBoard = () => {
    return axios.get(API_URL + "/user/", {headers: authHeader() });
};


const getModeratorBoard = () => {
    return axios.get(API_URL + "/auth/user/", { headers: authHeader() });
};


const getAdminBoard = () => {
    return axios.get(API_URL + "/auth/user/", { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
};


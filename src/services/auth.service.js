// import axios from 'axios';
import authHeader from './auth-header';
import API_URL from '../constants/apiConstants.js';

const HttpsProxyAgent = require('https-proxy-agent');

const axiosDefaultConfig = {
    baseURL: 'https://api.sigma-analytics.co.nz/',
    proxy: false,
    httpsAgent: new HttpsProxyAgent('https://sigma-analytics.co.nz')
};

const axios = require ('axios').create(axiosDefaultConfig);


const register = (username, email, first_name, last_name, password, password2) => {
    return axios.post(API_URL + "auth/register/", {
        username,
        email,
        first_name, 
        last_name,
        password,
        password2,
    });
};

const login = (username, password) => {
    return axios.post(API_URL + "auth/login/", {
        username,
        password,
    })
    .then((response) => {
        if (response.data.access) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};


const logout = () => {
    return axios.post(API_URL + 'auth/logout/', {headers: authHeader() })
    .then(localStorage.removeItem("user"));

    // });
};

    

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


export default {
    register,
    login,
    logout,
    getCurrentUser
}
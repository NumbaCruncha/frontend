
import authHeader from './auth-header';
import API_URL from '../constants/apiConstants';

const HttpsProxyAgent = require('https-proxy-agent');

const axiosDefaultConfig = {
    baseURL: 'https://api.sigma-analytics.co.nz/',
    proxy: false,
    httpsAgent: new HttpsProxyAgent('https://sigma-analytics.co.nz')
};

const axios = require ('axios').create(axiosDefaultConfig);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post["Accept"] = "*/*";


const getPublicContent = (props) => {
    return axios.get(API_URL + props)
    .then((response) => {
        if (response.data) {
        }
        return response.data;
    });
};


const getUserBoard = (props) => {
    console.log('props: ' + props);
    
    console.log('authHeader: ' + props);
    
    return axios.get(API_URL + "auth/login/user/", { 
        headers: { "Authorization": "Bearer " + props }
    })
    .then((response) => {
        if (response) {
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            console.log('User response :'+ JSON.stringify(response.data));
        }
        return response.data;
    });
};


const getModeratorBoard = () => {
    return axios.get(API_URL + "auth/mod/", { headers: authHeader() });
};


const getAdminBoard = () => {
    return axios.get(API_URL + "auth/admin/", { headers: authHeader() });
};


export default {
    getPublicContent,
    getUserBoard, 
    getModeratorBoard,
    getAdminBoard
};


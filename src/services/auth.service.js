
import authHeader from './auth-header';
import API_URL from '../constants/apiConstants.js';
import getUserBoard from '../services/user.service';

const HttpsProxyAgent = require('https-proxy-agent');

const axiosDefaultConfig = {
    baseURL: 'https://api.sigma-analytics.co.nz/',
    proxy: false,
    httpsAgent: new HttpsProxyAgent('https://sigma-analytics.co.nz')
};

const axios = require ('axios').create(axiosDefaultConfig);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post["Accept"] = "*/*";


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




const login = (payload) => {

    let username = payload.username
    let password = payload.password
    
    return axios.post(API_URL + "auth/login/", { 
        username, 
        password 
    })
        .then((response) => {
            if (response.data.access) {
                localStorage.setItem("token", JSON.stringify(response.data));
                console.log('Login response :'+ response.data.access);
            }
            return response.data;
        });
    };

// const logout = () => {
//     return (

//         axios.post(API_URL + 'auth/logout/', {
//             headers: authHeader() })
//     .then(localStorage.removeItem("user"))
//     )
// };



const logout = () => {
    
    let reqOptions = {
            url: API_URL + 'auth/logout_all/',
            method: "POST",
            headers: authHeader(),
            };

    return (
            axios.request(reqOptions)
            .then(function (response) { console.log(response.data); })
            // .then(localStorage.removeItem("user"))
            // .then(localStorage.removeItem("username"))
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    }
                }) 
    )};
    
   

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("username"));
};


export default {
    register,
    login,
    logout,
    getCurrentUser
}
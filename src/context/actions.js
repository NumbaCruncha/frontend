import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

const ROOT_URL = 'https://api.sigma-analytics.co.nz';

// var url = require('url');
// var https = require('https');
// var HttpsProxyAgent = require('https-proxy-agent');

// var proxy = process.env.http_proxy || 'http://sigma-analytics.co.nz';
// console.log('using proxy server %j', proxy);


// var endpoint = process.argv[2] || 'https://api.sigma-analytics.co.nz';
// console.log('attempting to POST to %j', endpoint);
// var options = url.parse(endpoint);


// var agent = new HttpsProxyAgent(proxy);
// options.agent = agent;


export async function loginUser(dispatch, loginPayload) {
	// const userOptions = {
	// 	method: 'GET',
	// 	httpsAgent: agent,
	// 	proxy: false,
	// 	headers: { 
	// 		'Content-Type': 'application/x-www-form-urlencoded',
	// 		'Bearer': localStorage.getItem('token')
	// 	}
	// };
	// const requestOptions = {
	// 	method: 'POST',
	// 	httpsAgent: agent,
	// 	// headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify(loginPayload),
	// };

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		// let response = await fetch(`${ROOT_URL}/auth/login/`, requestOptions);
		let response = await AuthService.login(loginPayload);
		let data = await response;
		
		if (data.access) { 
			
			

			let user_request = await UserService.getUserBoard(data.access)
			let detailsPayload = await JSON.parse(user_request)
			console.log('user_request: ' + detailsPayload)
			localStorage.setItem('currentUser', JSON.stringify(detailsPayload));
			localStorage.setItem('token', JSON.stringify(response.data));

			dispatch({ type: 'LOGIN_SUCCESS', payload: { data, detailsPayload }});
			
			// let response = await fetch(`${ROOT_URL}/auth/login/user/`, userOptions);
			// let userDetails = await response.json();
			// localStorage.setItem('currentUser2', JSON.stringify(userDetails));
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
		console.log(data.errors[0]);
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {

	const token = localStorage.getItem('token')
	
	
	const logoutOptions = {
		method: 'POST',
		// httpsAgent: agent,
		proxy: false,
		headers: { 
			'Content-Type': 'application/x-www-form-urlencoded',
			'Bearer': token
		}
	};

	try {
		console.log(token);
		dispatch({ type: 'LOGOUT' });
		// let response = await fetch(`${ROOT_URL}/auth/logout_all/`, logoutOptions);
		let response = await AuthService.logout(logoutOptions);
		localStorage.removeItem('access');
		localStorage.removeItem('refresh');
		localStorage.removeItem('user');
	} catch (error) {
		console.log(error);
	}

}
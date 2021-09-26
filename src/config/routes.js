import React from 'react';
import Login  from '../pages/Login';
import Landing from '../pages/Landing'
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const routes = [

	{																																													
		path: '/',
		exact: true,
		component: Landing,
		isPrivate: false,

	},
	{
		path: '/login',
		exact: false,
		component: Login,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		exact: false,
		component: Dashboard,
		isPrivate: true,
	},
	{
		path: '/*',
		exact: false,
		component: NotFound,
		isPrivate: false,
	},
];



export default routes;
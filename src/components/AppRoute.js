import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from '../context';

const AppRoutes = ({ component: Component, path, exact, isPrivate, ...rest }) => {
	const userDetails = useAuthState();	
	return (
		
		<Route
			{...rest}
			path={path}
			exact={exact}
			render={(props) => 			
				isPrivate && !Boolean(userDetails.token) ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
					<Component {...props} />
				)
			}
		
		>
		</Route>	
	);
};

export default AppRoutes;
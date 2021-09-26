import React from "react";
import { ChakraProvider, } from '@chakra-ui/react';
import { BrowserRouter as Router,  Switch } from 'react-router-dom';
import routes from '../src/config/routes';
import { AuthProvider } from './context';
import AppRoute from './components/AppRoute';


function App({ Component }) {

  return (
    
	<ChakraProvider> 
		<AuthProvider>
			<Router>	
				<Switch>
					{routes.map((route) => (
						<AppRoute
							key={route.path}
							path={route.path}
							exact={route.exact}
							component={route.component}
							isPrivate={route.isPrivate}
						/>
					))}
				</Switch>
			</Router>    	
		</AuthProvider>
	</ChakraProvider>	
	);
}

export default App;

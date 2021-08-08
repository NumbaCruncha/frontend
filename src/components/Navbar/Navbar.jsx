import { Box, useColorModeValue as mode } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import { NavContent } from './NavContent'
import { Login } from "../Login/Login";
import { UI } from "../Dashboard/UI";
import { Landing }from "../Landing/Landing";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import AuthService from "../../services/auth.service";



export const Navbar = () => {

  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    

    if (user) {
      setCurrentUser(user);
      setLoggedIn(!loggedIn);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  

  
  return (
    <Box minH="640px">
      <Box as="header" bg={mode('white', 'gray.800')} position="relative" zIndex="10">
        <Box
          as="nav"
          aria-label="Main navigation"
          maxW="7xl"
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        > 
          <NavContent.Mobile
            display={{
              base: 'flex',
              lg: 'none'
            }}
            currentUser={currentUser}
          />
          <NavContent.Desktop
            display={{
              base: 'none',
              lg: 'flex'     
            }}
            currentUser={currentUser}
          />
        
        </Box>
        
      </Box>   
      <Router>  
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route exact path="/login" ><Login /></Route>
          <Route exact path="/dashboard" ><UI /></Route>
        </Switch>
      </Router>
    </Box>

  )
}


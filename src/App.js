import React, { useState, useEffect, createContext } from "react";
import { ChakraProvider, } from '@chakra-ui/react';
import { Navbar } from "./components/Navbar/Navbar";
import UserContext from './components/User/User';
import AuthService from '../src/services/auth.service';


function App({ Component }) {

  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedin, setLoggedIn] = useState(false);
  // 2. Use at the root of your app


  useEffect(() => {
    const user = AuthService.getCurrentUser();
    return user
      });


    if (user) {
      setCurrentUser(user);
      setLoggedIn(true);
      console.log('User is logged In:', loggedin);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    } else {
      setLoggedIn(false);
      setCurrentUser(undefined);
      console.log('User is logged In:', loggedin);
    } 



  return (
     <ChakraProvider> 
       <UserContext.Provider value={currentUser}>
       <Navbar/>
       </UserContext.Provider>
    </ChakraProvider>
  )
}

export default App;

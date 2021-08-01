import { Box, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import { Login } from "../Login/Login";
import { UI } from "../Dashboard/UI";
import Landing from "../../pages/Landing";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import { Logo } from '../ui/Logo';



export const Navbar = () => {
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
              lg: 'none',
            }}
          />
          <NavContent.Desktop
            display={{
              base: 'none',
              lg: 'flex',
            }}
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


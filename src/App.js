import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Navbar } from "./components/Navbar/Navbar";
import { Form } from "./components/Form/Form";
import { Login } from "./components/Login/Login";
import  Landing  from "./pages/Landing";
import { UI } from "./components/Dashboard/UI";


function App({ Component }) {
  // 2. Use at the root of your app
  const [currentUser, setCurrentUser] = useState(undefined);
  return (
     <ChakraProvider>
  
    
      <Navbar/>
    </ChakraProvider>
  )
}

export default App;

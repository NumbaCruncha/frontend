import {
  Button,
  Checkbox,
  Flex,
  InputGroup,
  InputRightElement,
   FormControl,
  FormLabel,
  Input,
  LightMode,
  CircularProgress,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import React, { useState, useRef } from "react";
import { UnderlineLink } from './UnderlineLink'
import AuthService from "../../services/auth.service";
// import { ErrorMessage }from '../ErrorMessage/ErrorMessage';
import { Landing }from "../Landing/Landing";
import { Redirect, Switch, Route, BrowserRouter as Router} from "react-router-dom";

export const SigninForm = (props) => {

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const checkBtn = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await AuthService.login(username, password);
      setIsLoggedIn(true);
      setIsLoading(false);
      // setShowPassword(true);
      <Switch><Route exact path={["/"]} component={Landing} /></Switch>

    } catch (error) {
      setError('Invalid username or password');
      setIsLoading(false);
      setUsername('');
      setPassword('');
      setShowPassword(false);
    }
  };
   
  if (isLoggedIn) {
    return <Redirect to='/' />
   }
 
  return (
    <form
      onSubmit={handleSubmit}
    >
      <Stack spacing="-px">
        <FormControl isRequired id="username">
          <FormLabel srOnly>Username</FormLabel>
          <Input
            size="lg"
            name="username"
            type="text"
            autoComplete="username"
            required
            placeholder="Email address"
            bg={mode('white', 'gray.700')}
            fontSize="md"
            roundedBottom="0"
            onChange={e => setUsername(e.currentTarget.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel srOnly>Password</FormLabel>
          <InputGroup>
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            size="lg"
            bg={mode('white', 'gray.700')}
            fontSize="md"
            roundedTop="0"
            placeholder="Password"
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <InputRightElement width="3rem">
            <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
              {showPassword ? <Icon name="ViewOffIcon" /> : <Icon name="ViewIcon" />}
            </Button>
          </InputRightElement>
        </InputGroup>
        </FormControl>
      </Stack>
      <Flex align="center" justify="space-between" mt="8">
        <LightMode>
          <Checkbox
            size="lg"
            value={checkBtn}
            colorScheme="blue"
            sx={{
              '.chakra-checkbox__control': {
                '&:not([data-checked])': {
                  bg: mode('white', 'gray.700'),
                },
                rounded: 'base',
                borderWidth: '1px',
              },
              '.chakra-checkbox__label': {
                fontSize: 'sm',
              },
            }}
          >
            Remember me
          </Checkbox >
        </LightMode>
        <UnderlineLink fontSize="sm">Forgot Password</UnderlineLink>
      </Flex>
      <LightMode>
        {/* <Button
          size="lg"
          type="submit"
          mt="8"
          w="full"
          colorScheme="blue"
          fontSize="md"
          fontWeight="bold"
      
        >
          Sign in
        </Button> */}

        <Button 
        variantColor="teal" 
        variant="outline" 
        type="submit" 
        width="full" 
        mt={4}>
          {isLoading ? (
            <CircularProgress isIndeterminate size="24px" color="teal" />
          ) : (
            'Sign In'
          )}
          </Button>
      </LightMode>
    </form>
  )
}

import {
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  VisuallyHidden,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import  Logo  from '../Logo/Logo'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from './Submenu'
import { ToggleButton } from './ToggleButton'
import { links } from './_data'
import { Logout } from "../Logout/Logout";
import { Link } from 'react-router-dom'
import { Landing }from "../Landing/Landing";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import AuthService from "../../services/auth.service";

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const { currentUser } = props
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto">
          <Logo h="24px" iconColor="blue.400" />
        </Box>
        <Box
          visibility={{
            base: 'hidden',
            sm: 'visible',
          }}
        >
          {/* <Button as="a" colorScheme="purple"> */}
            {/* Get Started */}
          {/* </Button> */}
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          ),
        )}
          {/* {
          currentUser ? (
            <Box as="a" color={mode('blue.600', 'blue.300')} fontWeight="bold">
              Sign Out
              <Logout />
              </Box>
            ) : (
            <Box as="a" href="/login" color={mode('blue.600', 'blue.300')} fontWeight="bold">Sign In</Box>)
            } */}
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props) => {

  const { currentUser, loggedIn } = props

  const logOut = () => {
    AuthService.logout();
    <Switch><Route exact path={["/", "/home"]} component={Landing} /></Switch>
    
  };


  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Box as="a" href="#" rel="home">
        <VisuallyHidden>MicroInvestigators</VisuallyHidden>
        <Logo h="6" iconColor="blue.500" />
      </Box>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      
      <HStack spacing="8" minW="240px" justify="space-between">
              
              
      <Button 
        variantColor="teal" 
        variant="outline" 
        type="submit" 
        width="full" 
        mt={4}>Sign In
          {currentUser ? (
            <Logout isIndeterminate size="24px" color="teal" />
          ) : (
            <Button onClick={logOut} size="24px" color="teal" type="submit" width="full" mt={4} a="Sign In"/>
          )}
          </Button>

              

      </HStack>
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}

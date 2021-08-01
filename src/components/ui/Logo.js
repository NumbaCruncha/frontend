import React from "react";
import { Box, Text , Icon, HStack, Button} from "@chakra-ui/react";
import { FaMicroscope } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Logo(props) {
  return (
    // <Box maxW="sm" mx="auto">      

          <Button as="a" href="/" colorScheme="none"> 
          <HStack>
            <Icon as={ FaMicroscope }  w={8} h={8} color="purple.300" />
            <Text  fontSize="lg" fontWeight="bold" color="purple.600">MicroInvestigators</Text>
            </HStack>
          </Button>

  );
}
import React from "react";
import { Box, Text , Icon, HStack, Button} from "@chakra-ui/react";
import { FaMicroscope } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Logo(props) {
  return (
    // <Box maxW="sm" mx="auto">      

          <Button as="a" href="/"> 
          <HStack>
            <Icon as={ FaMicroscope }  w={8} h={8} color="purple.500" />
            <Text fontSize="lg" fontWeight="bold" color="purple.500">MicroInvestigators</Text>
            </HStack>
          </Button>

  );
}
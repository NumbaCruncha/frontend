import { Box, Button, Flex, Heading,  Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { PartnerGrid } from "../../components/PartnerGrid/PartnerGrid"
import { Footer } from "../../components/Footer/Footer"
import  beach  from "../../static/images/beach.jpg"
import { Navbar } from '../../components/Navbar/Navbar';


const Landing = () => {
  return (
    <div>
      <Navbar/>
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" borderWidth="1px" position="relative" zIndex={1}>
        <Box 
        // borderWidth="5px" borderColor="red.500" 
          maxW={{
            base: 'xl',
            md: 'xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          color="white"
        >
          <Box   maxW="xl" >
            <Heading as="h1" size="3xl" fontWeight="bold">
              Participate. Investigate.
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
              maxW="lg"
            >
              Join thousands of students throughout New Zealand who are helping researchers understand our impact on the environment.
            </Text>
            
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="6"   
            >
            <Button
                as="a"
                href="/dashboard"
                colorScheme="blue"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold" 
              >
                Get Started
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={beach}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
          <PartnerGrid/>
          <Footer/>
          </div>
  )
}

export default Landing;
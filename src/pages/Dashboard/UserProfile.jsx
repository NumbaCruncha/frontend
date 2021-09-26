import { Avatar, Flex, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { loginUser, useAuthState, useAuthDispatch } from '../../context';

export const UserProfile = (props) => {
  const { image} = props
  let { user } = useAuthState();
  const name = user.username
  const email = user.email

  
  return (
    <HStack spacing="4" px="2" flexShrink={0} borderTopWidth="1px" p="4">
      <Avatar size="sm" name='sefvr' src={image} />
      <Flex direction="column" fontWeight="medium">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs" lineHeight="shorter" color={mode('gray.600', 'gray.400')}>
          {email}
        </Text>
      </Flex>
    </HStack>
  )
}

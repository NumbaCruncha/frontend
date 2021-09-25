import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
  import { useDisclosure } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
  // import AuthService from "../../services/auth.service";
  import { Redirect } from "react-router-dom";
  import { logout, useAuthState, useAuthDispatch } from '../../context';

 



export const Logout = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useAuthDispatch();
    const { username, password } = useAuthState();
    const logOut = () => {
      logout(dispatch, {username, password});
      onClose();
       };
   
        return (
          <>
            <Button onClick={onOpen}>Sign Out</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Logging Out</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Are you sure you want to logout?
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={logOut}>
                    Logout
                  </Button>
                  <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      };



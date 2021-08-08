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
  import { Button, ButtonGroup } from "@chakra-ui/react"
  import AuthService from "../../services/auth.service"
  import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
  import { Landing }from "../Landing/Landing";


export const Logout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const logOut = () => {
      AuthService.logout();
      
      
      
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
              <Button colorScheme="blue" mr={3} onClick={onClose, logOut}>
                Logout
              </Button>
              <Button variant="ghost">Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


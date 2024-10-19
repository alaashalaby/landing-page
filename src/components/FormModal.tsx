import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import LoginForm from "./Forms/LoginForm";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import RegisterForm from "./Forms/RegisterForm";
function FormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSwitchLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <Button
        variant="unstyled"
        color="#454545"
        fontSize="2xl"
        onClick={onOpen}
      >
        <BiUser />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInTop"
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontSize="3xl" color="#FA4604">
            {isLoggedIn ? "Log In" : "Register"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoggedIn ? (
              <LoginForm handleSwitchLogin={handleSwitchLogin} />
            ) : (
              <RegisterForm handleSwitchLogin={handleSwitchLogin} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FormModal;

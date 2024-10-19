import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/CartContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FormModal from "./FormModal";
interface Props {
  isSmallScreen: boolean;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}
const NavIcons = ({ isSmallScreen, showMenu, setShowMenu }: Props) => {
  const context = useContext(CartContext);
  const cartItems = context?.cartItems;
  return (
    <Flex
      gap="2"
      sx={{
        button: {
          ":hover": {
            color: "#FA4604",
          },
        },
      }}
    >
      <FormModal />
      <Link to="cart">
        <Button
          variant="unstyled"
          color="#454545"
          fontSize="2xl"
          position="relative"
        >
          <BsBag />
          {cartItems?.length !== 0 && (
            <Text
              position="absolute"
              top="-10px"
              right="-10px"
              bg="#FA4604"
              color="white"
              borderRadius="50%"
              w="30px"
              h="30px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="md"
            >
              {cartItems?.length}
            </Text>
          )}
        </Button>
      </Link>
      {isSmallScreen && (
        <IconButton
          aria-label="menu icon"
          minW="auto"
          icon={showMenu ? <BiX /> : <BiMenu />}
          variant="none"
          fontSize="2xl"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}
    </Flex>
  );
};

export default NavIcons;

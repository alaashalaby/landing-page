import { Flex, Box, Container, Heading,useMediaQuery } from "@chakra-ui/react";
import NavList from "./NavList";
import NavIcons from "./NavIcons";
import { useState } from "react";

const Navbar = () => {
const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
const isSmallScreen = !isMediumScreen;
const [showMenu, setShowMenu] = useState(false);
  return (
    <Box
      bg="#fff"
      py="7"
      as="nav"
      position="sticky"
      top="0"
      zIndex="999"
      shadow="lg"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="lg">
            <Box as="span" color="#FA4604">
              Little
            </Box>
            Fashion
          </Heading>
          <NavList
            isMediumScreen={isMediumScreen}
            isSmallScreen={isSmallScreen}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <NavIcons
            isSmallScreen={isSmallScreen}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

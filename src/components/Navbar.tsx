import { Flex, Box, Container, Heading } from "@chakra-ui/react";
import NavList from "./NavList";
import NavIcons from "./NavIcons";

const Navbar = () => {
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
          <NavList />
          <NavIcons />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

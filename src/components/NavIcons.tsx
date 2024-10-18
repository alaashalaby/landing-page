import { Button, Flex, Text } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

const NavIcons = () => {
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
      <Button variant="unstyled" color="#454545" fontSize="2xl">
        <BiUser />
      </Button>
      <Button
        variant="unstyled"
        color="#454545"
        fontSize="2xl"
        position="relative"
      >
        <BsBag />
        <Text
          width="25px"
          height="25px"
          borderRadius="50%"
          bg="primary.500"
          color="#FA4604"
          position="absolute"
          right="5px"
          top="-8px"
          lineHeight="17px"
          border="1px solid"
          borderColor="#FA4604"
          fontSize="md"
          textAlign="center"
        >
          5
        </Text>
      </Button>
    </Flex>
  );
};

export default NavIcons;

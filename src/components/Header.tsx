import { Box, Text, Button, Heading } from "@chakra-ui/react";
import headerImg from "../assets/headerImg.webp";
const Header = () => {
  return (
    <Box
      as="header"
      height="80vh"
      bgImage={headerImg}
      bgPosition={"center"}
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      _before={{
        content: '""',
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.3)",
        zIndex: "2",
      }}
    >
      <HeaderContent />
    </Box>
  );
};

export default Header;

const HeaderContent = () => {
  return (
    <Box position="absolute" top={{base:"35%" , md:"45%"}} left={{base:"5%" , md:"20%"}} zIndex={10}>
      <Heading as="h1" color="#fff" mb="4" fontWeight="bold">
        Talk TO US
      </Heading>
      <Text color="#a5a5a5" mb="3" fontSize="xl" maxW="47ch">
        Tooplate is one of the best HTML CSS template Websites for everyone
      </Text>
      <Button
        _hover={{ opacity: "0.8" }}
        w="fit-content"
        textTransform="uppercase"
        bg="#000"
        color="#fff"
        rounded="full"
        p="5"
      >
        Work With Us
      </Button>
    </Box>
  );
};

import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";

const Footer = () => {
  return (
    <Box as="footer" bg="#000" py="12">
      <Container maxW="7xl">
        <SimpleGrid columns={[1, 1, 3]} spacing={6}>
          <Box>
            <Heading as="h4" color="#fff" mb="5">
              <Text as="span" color="#a5a5a5">
                Little
              </Text>{" "}
              Fashion
            </Heading>
            <Text color="#7b7b7b" mb="2" fontSize="xl">
              Copyright &copy; 2024 Little Fashion
            </Text>
            <Text color="#7b7b7b" fontSize="xl">
              Designed by{" "}
              <Text as="span" color="#FA4604">
                Tooplate
              </Text>
            </Text>
          </Box>
          <Box>
            <Heading as="h4" color="#fff" mb="5">
              Sitemap
            </Heading>
            <List
              sx={{
                li: {
                  color: "#7b7b7b",
                  marginBottom: "2",
                  fontSize: "xl",
                  cursor: "pointer",
                  transition: "all 0.4s ease-in-out",
                  ":hover": {
                    color: "#FA4604",
                  },
                },
              }}
            >
              <ListItem>Story</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem>Products</ListItem>
            </List>
          </Box>
          <Box>
            <Heading as="h4" color="#fff" mb="5">
              Social
            </Heading>
            <List
              display="flex"
              gap="5"
              sx={{
                li: {
                  color: "#7b7b7b",
                  fontSize: "2xl",
                  transition: "all 0.4s ease-in-out",
                  ":hover": {
                    color: "#FA4604",
                  },
                },
              }}
            >
              <ListItem>
                <Link href="https://github.com/alaashalaby" target="_blank">
                  <BiLogoGithub />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://wa.me/+201128589590" target="_blank">
                  <BiLogoWhatsapp />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/alaa-shalaby-262b37218/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://facebook.com" target="_blank">
                  <BiLogoFacebook />
                </Link>
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;

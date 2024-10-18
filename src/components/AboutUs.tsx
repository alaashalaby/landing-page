import {
  Box,
  Center,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";
import aboutImage from "../assets/aboutImg.webp";
const AboutUs = () => {
  return (
    <Box as="section" py={{ base: 8, md: 10, lg: 20 }}>
      <SubTitle />
      <Container maxW="7xl" mt={{ base: 3, md: 4, lg: 7 }} pt="8">
        <SimpleGrid gap={{ base: "4", lg: "9" }} columns={{ base: 1, md: 2 }}>
          <Box>
            <Image
              src={aboutImage}
              alt="about us image"
              w="100%"
              rounded="md"
            />
          </Box>
          <AboutUsInfo />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutUs;

const AboutUsInfo = () => {
  return (
    <Box>
      <Heading as="h3" color="#101010" mb="2" fontSize="3xl">
        Good{" "}
        <Text as="span" color="#FA4604">
          Design
        </Text>
      </Heading>
      <Heading as="h3" color="#101010" mb="8">
        Ideas for
        <Text as="span" color="#FA4604">
          {" "}
          your
        </Text>{" "}
        Fashion
      </Heading>
      <Text fontSize="xl" mb="9" color="#7b7b7b">
        Little Fashion templates comes with sign in / sign up pages, product
        listing / product detail , about , FAQs, and contact page
      </Text>

      <Text fontSize="xl" color="#7b7b7b">
        Since This HTML template is based on Bootstrap 5 CSS Library, you can
        feel free to add more component as you need.
      </Text>
      <Button
        variant="unstyled"
        mt={{ base: "10", md: "20" }}
        fontWeight="bold"
        color="#7b7b7b"
        textTransform="uppercase"
        _hover={{ color: "#FA4604" }}
      >
        Learn more About Us
      </Button>
    </Box>
  );
};

const SubTitle = () => {
  return (
    <Center textAlign="center">
      <Heading color="#101010">
        Get started with{" "}
        <Text as="span" color="#FA4604">
          Little
        </Text>
        Fashion
      </Heading>
    </Center>
  );
};

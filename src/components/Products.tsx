import {
  Box,
  Center,
  Heading,
  Text,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useProductsQuery from "../api/useProductsQuery";

const Products = () => {
  const { data, isLoading } = useProductsQuery();
  const products = data?.data.slice(0, 6);
  return (
    <Box as="section" pb="7">
      <Center textAlign="center">
        <Heading color="#101010">
          Feature
          <Text as="span" color="#FA4604">
            Products
          </Text>
        </Heading>
      </Center>
      <Container maxW="7xl" mt={7} p={3}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Products;

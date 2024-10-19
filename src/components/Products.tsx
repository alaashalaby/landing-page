import {
  Box,
  Center,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useProductsQuery from "../api/useProductsQuery";
import { Link } from "react-router-dom";
import SkeletonLoading from "./SkeletonLoading";

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
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <SkeletonLoading key={index} />
            ))
          ) : (
            <>
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          )}
        </SimpleGrid>
        <Center my="5">
          <Link to="products">
            <Button
              variant="unstyled"
              fontWeight="bold"
              color="#fff"
              bg="#000"
              rounded="full"
              px={8}
            >
              Show More Products
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
};

export default Products;

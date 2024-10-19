import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import useProductsQuery from "../api/useProductsQuery";
import ProductCard from "../components/ProductCard";
import SkeletonLoading from "../components/SkeletonLoading";
const ProductsPage = () => {
  const { data: products , isLoading} = useProductsQuery();
  return (
    <>
      <Box mt={5}>
        <Heading
          as="h1"
          textAlign="center"
          fontSize="3xl"
          color="#FA4604"
          fontWeight={500}
        >
          Our Products
        </Heading>
      </Box>
      <Box>
        <Container maxW="6xl" mt={7} p={3}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <SkeletonLoading key={index} />
              ))
            ) : (
              <>
                {products?.data.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </>
            )}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsPage;

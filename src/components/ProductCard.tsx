import { Box, Image, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { BiCartAdd } from "react-icons/bi";
import { CartContext } from "../context/CartContextProvider";
const ProductCard = ({ product }: { product: Product }) => {
  const context = useContext(CartContext);
  return (
    <Box shadow="md" rounded="lg" p={2}>
      <Image
        src={product.images[0]}
        alt={product.title}
        backgroundSize="cover"
        rounded="lg"
      />
      <Heading as="h4" my={3} textAlign="center" fontSize="xl" noOfLines={1}>
        {product.title}
      </Heading>
      <Flex alignItems="center" justifyContent="space-between" mb="2" p="3">
        <Text fontWeight="bold" as="span" color="#FA4604">
          {product.price}$
        </Text>
        <Button
          colorScheme="orange"
          rounded="full"
          fontSize="2xl"
          onClick={() => context?.addToCart(product)}
        >
          <BiCartAdd />
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
} from "@chakra-ui/react";
import emptyCartImage from "../assets/emptyCart.png";
import { useContext } from "react";
import { BiSolidTrash, BiMinus, BiPlus } from "react-icons/bi";
import { CartContext } from "../context/CartContextProvider";

const CartPage = () => {
  const context = useContext(CartContext);
  const cartItems = context?.cartItems;
  return (
    <Box as="section" pt={9}>
      <Container maxW="7xl">
        {cartItems?.length === 0 ? (
          <Center>
            <Image src={emptyCartImage} alt="empty cart" />
          </Center>
        ) : (
          <>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr sx={{ th: { textAlign: "center" } }}>
                    <Th>Product Image</Th>
                    <Th>Title</Th>
                    <Th>Quantity</Th>
                    <Th>Price</Th>
                    <Th>Total price</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                {cartItems?.map((item) => (
                  <Tbody key={item.id}>
                    <Tr sx={{ td: { textAlign: "center" } }}>
                      <Td>
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          width={100}
                          height={100}
                        />
                      </Td>
                      <Td>
                        <Heading fontSize="xl" color="#FA4604" noOfLines={1}>
                          {item.title}
                        </Heading>
                      </Td>
                      <Td>
                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          gap={2}
                        >
                          <Button
                            onClick={() => context?.removeFromCart(item.id)}
                          >
                            <BiMinus />
                          </Button>
                          <Text>{item.quantity}</Text>
                          <Button onClick={() => context?.addToCart(item)}>
                            <BiPlus />
                          </Button>
                        </Flex>
                      </Td>
                      <Td>
                        <Text fontWeight="bold">$ {item.price}</Text>
                      </Td>
                      <Td>
                        <Text
                          fontSize="xl"
                          textTransform="capitalize"
                          fontWeight="bold"
                          color="#101010"
                        >
                          ${Math.round(Number(item.quantity) * item.price)}
                        </Text>
                      </Td>
                      <Td>
                        <Button
                          variant="none"
                          fontSize="xl"
                          color="red"
                          onClick={() => context?.removeFromCart(item.id)}
                        >
                          <BiSolidTrash />
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                ))}
              </Table>
            </TableContainer>
          </>
        )}
      </Container>
    </Box>
  );
};

export default CartPage;

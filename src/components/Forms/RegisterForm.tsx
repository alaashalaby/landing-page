import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const RegisterForm = ({
  handleSwitchLogin,
}: {
  handleSwitchLogin: () => void;
}) => {
  return (
    <Box p={5}>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl mb={3}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input type="text" placeholder="Enter Your Username" id="username" />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email" id="email" />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Your Password..."
            id="password"
          />
        </FormControl>
        <Flex alignItems="center" gap="1" color="#a5a5a5" my="4">
          Do you have an account?
          <Button
            onClick={handleSwitchLogin}
            variant="unstyled"
            color="#FA4604"
          >
            Login
          </Button>
        </Flex>
        <FormControl as="center" my={3}>
          <Button
            type="submit"
            bg="#FA4604"
            border="1px solid #FA4604"
            shadow="md"
            px="10"
            color="#fff"
            _hover={{
              borderColor: "#f4ff4",
              bg: "transparent",
              color: "#FA4604",
            }}
          >
            Register
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RegisterForm;

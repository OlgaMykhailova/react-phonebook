import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Flex,
  FormLabel,
  Text,
  Box,
  Input,
  Link,
} from '@chakra-ui/react';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    form.reset();
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        minW="400px"
        minH="400px"
        boxShadow="dark-lg"
        p="5"
        borderRadius="lg"
      >
        <form onSubmit={handleSubmit} autoComplete="on">
          <FormLabel m="0">
            <Text display="block" py="2" fontSize={['lg', null, "3xl", null]}>
              Username
            </Text>
            <Input
              variant="filled"
              autoComplete="on"
              size="lg"
              type="text"
              name="name"
              placeholder="Enter your username"
            ></Input>
          </FormLabel>
          <FormLabel m="0">
            <Text display="block" py="2" fontSize={['lg', null, "3xl", null]}>
              Email
            </Text>
            <Input
              autoComplete="on"
              variant="filled"
              size="lg"
              type="email"
              name="email"
              placeholder="Enter your email"
            ></Input>
          </FormLabel>
          <FormLabel m="0">
            <Text display="block" py="2" fontSize={['lg', null, "3xl", null]}>
              Password
            </Text>
            <Input
              autoComplete="on"
              variant="filled"
              size="lg"
              type="password"
              name="password"
              placeholder="Enter your password"
            ></Input>
          </FormLabel>
          <Flex justifyContent="center" >
            <Button
              size="sm"
              mt="8"
              variant="outline"
              colorScheme="black"
              fontWeight="normal"
              bg="teal.400"
              fontSize="2xl"
              _hover={{ color: 'white' }}
              transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
              type="submit"
            >
              Register
            </Button>
          </Flex>
          <Text textAlign="center" mt='4' fontSize={['lg', null, "3xl", null]}>
            Already registered?
            <Link
              as={NavLink}
              to="/login"
              ml='2'
              _hover={{ color: 'white' }}
              transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
              Sign in
            </Link>
          </Text>
        </form>
      </Box>
    </Flex>
  );
};

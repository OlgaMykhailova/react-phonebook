import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
import { logIn } from 'redux/auth/authOperations';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
       dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        minW="400px"
        minH="380px"
        boxShadow="dark-lg"
        p="5"
        borderRadius="lg"
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
          <Form>
          <FormLabel m="0">
            <Text display="block" py="2" fontSize={['lg', null, '3xl', null]}>
              Email
            </Text>
            <Input
            as={Field}
              variant="filled"
              autoComplete="on"
              size="lg"
              type="email"
              name="email"
              placeholder="Enter your email"
            ></Input>
            <ErrorMessage name="email" component="span"></ErrorMessage>
          </FormLabel>
          <FormLabel m="0">
            <Text display="block" py="2" fontSize={['lg', null, '3xl', null]}>
              Password
            </Text>
            <Input
            as={Field}
              variant="filled"
              autoComplete="on"
              size="lg"
              type="password"
              name="password"
              placeholder="Enter your password"
            ></Input>
            <ErrorMessage name="password" component="span"></ErrorMessage>
          </FormLabel>
          <Flex justifyContent="center" mt="12">
            <Button
              size="sm"
              variant="outline"
              colorScheme="black"
              fontWeight="normal"
              bg="teal.400"
              fontSize="2xl"
              _hover={{ color: 'white' }}
              transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
              type="submit"
            >
              LogIn
            </Button>
          </Flex>
          <Flex justifyContent="center" alignItems="center" mt="4">
            <Text textAlign="center" fontSize={['lg', null, '3xl', null]}>
              Don't have an account?
            </Text>
            <Link
              as={NavLink}
              to="/register"
              ml="2"
              fontSize={['lg', null, '3xl', null]}
              _hover={{ color: 'white' }}
              transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
              Sign up
            </Link>
          </Flex>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};

import { NavLink } from 'react-router-dom';
import { Link, Flex, Text } from '@chakra-ui/react';

export const AuthNav = () => {
   return (
    <Flex ml='auto'>
      <Link as={NavLink} ml='5' fontSize='4xl' _activeLink={{ color: 'white' }} _hover={{ color: 'white' }} transition='color 250ms cubic-bezier(0.4, 0, 0.2, 1)' to="/register"><Text mr='5' fontSize='4xl'>Register</Text></Link>
      <Link as={NavLink} ml='5' fontSize='4xl' _activeLink={{ color: 'white' }} _hover={{ color: 'white' }} transition='color 250ms cubic-bezier(0.4, 0, 0.2, 1)' to="/login"><Text fontSize='4xl'>Login</Text></Link>
    </Flex>
  );
};

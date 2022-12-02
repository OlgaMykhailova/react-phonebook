import { Heading } from '@chakra-ui/react';
import { FaAddressBook } from 'react-icons/fa';
import { Flex, Text, Box } from '@chakra-ui/react';
import { useAuth } from 'hooks';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Flex justifyContent="space-between" pt="32" px='12'>
      <FaAddressBook size="300px" />
      <Box p="8" maxW='500px'>
        {isLoggedIn ? (
          <Heading as="h2" size="2xl" textAlign="center" mb="7">
            Welcome to your own Contact Book!
          </Heading>
        ) : (
          <Heading as="h2" size="2xl" textAlign="center" mb="7">
            Create your own personal book of contacts!
          </Heading>
        )}
        <Text>
          Contacts book is easy way to keep your contacts safe and always at
          hand. You can add contacts, delete or easily find them.
        </Text>
      </Box>
    </Flex>
  );
}

import { Heading } from '@chakra-ui/react';
import { FaAddressBook } from 'react-icons/fa';
import { Flex, Text, Box } from '@chakra-ui/react';
import { useAuth } from 'hooks';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      py={['16', null, '32', null]}
      px={['4', null, '10', null]}
      mt="10"
      boxShadow="dark-lg"
      borderRadius="lg"
    >
      <FaAddressBook size="300px" />
      <Box ml={['3', null, '8', null]} p={['1', null, '8', null]} maxW="500px">
        {isLoggedIn ? (
          <Heading
            as="h2"
            fontSize={['lg', null, '4xl', null]}
            textAlign="center"
            mb="7"
          >
            Welcome to your own Contact Book!
          </Heading>
        ) : (
          <Heading
            as="h2"
            fontSize={['lg', null, '4xl', null]}
            textAlign="center"
            mb="7"
          >
            Create your own personal book of contacts!
          </Heading>
        )}
        <Text fontSize={['md', null, '2xl', null]}>
          Contact book is easy way to keep your contacts safe and always at
          hand. You can add contacts, delete or easily find them.
        </Text>
      </Box>
    </Flex>
  );
}

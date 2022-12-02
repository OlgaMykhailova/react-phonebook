import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, Box, Flex } from '@chakra-ui/react';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { selectFilter } from '../../redux/filter/filterSelectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Flex justifyContent="center">
      <Box minW="600px">
        <Flex justifyContent="center">
          <List p="12">
            {getVisibleContacts().map(contact => (
              <ContactListItem
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            ))}
          </List>
        </Flex>
      </Box>
    </Flex>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};

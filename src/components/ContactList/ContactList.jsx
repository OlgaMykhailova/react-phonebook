import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, Flex } from '@chakra-ui/react';
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
    <Flex justifyContent="center" alignItems='center' py='4'>
      <List maxW={[420, null, 500, null]} py="4" w="100%">
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
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/contacts/contactsSelectors';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Your Contacts</h2>
      <ContactForm></ContactForm>
      <div>{isLoading && 'Request in progress'}</div>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
}

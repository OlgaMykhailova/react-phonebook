import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/contacts/contactsSelectors';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { ContactEditor } from '../components/ContactEditor/ContactEditor';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Your Contacts</h2>
      {/* <ContactEditor></ContactEditor> */}
      <div>{isLoading && 'Request in progress'}</div>
      <ContactList></ContactList>
    </>
  );
}

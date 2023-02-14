import { ContactForm, ContactsList } from 'components';
import { ContactsHeader } from 'components/ContactsHeader/ContactsHeader';
import { Spinner } from 'components/Spinner/Spinner.modules';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function PhonebookPages() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <ContactsHeader />
      <div>
        <ContactsList />

        {isLoading && !error && <Spinner />}
      </div>
    </>
  );
}

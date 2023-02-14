import { FormBox, Label, Input, Button, Error } from './ContactForm.modules';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

const schema = yup.object().shape({
  contactName: yup.string().min(2).required('Required field'),
  number: yup.string().phone('UA', true, `Phone is invalid`),
});

const initialValues = {
  contactName: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = (values, actions) => {
    const { contactName, number } = values;
    // const name = contactName.toLowerCase();

    if (
      contacts.find(
        contact => contactName.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.warning(`${contactName} is already in contacts.`, {
        position: 'center-top',
      });

      return;
    }

    dispatch(addContact({ contactName, number }));

    actions.resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        <FormBox autoComplete="off">
          <Label htmlFor="name">
            Enter your name
            <br />
            <Input
              id="name"
              type="text"
              name="contactName"
              placeholder="Enter your name"
            />
            <br />
            <ErrorMessage component={Error} name="contactName" />
          </Label>
          <br />
          <Label htmlFor="number">
            Enter your number
            <br />
            <Input
              id="number"
              type="tel"
              name="number"
              placeholder="+38 067 122 22 88"
            />
            <br />
            <ErrorMessage component={Error} name="number" />
          </Label>
          <br />
          <Button type="submit">Add contact</Button>
        </FormBox>
      </Formik>
    </div>
  );
};

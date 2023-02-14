// import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Div } from './Register.modules';

export default function Register() {
  return (
    <Div>
      {/* <Helmet> */}

      <h1>Registration</h1>

      {/* </Helmet> */}

      <RegisterForm />
    </Div>
  );
}

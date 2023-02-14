import { LoginForm } from 'components/LoginForm/LoginForm';
import { Div } from './Login.modules';

export default function Login() {
  return (
    <Div>
      {/* <Helmet> */}

      <h1>Login</h1>

      {/* </Helmet> */}

      <LoginForm />
    </Div>
  );
}

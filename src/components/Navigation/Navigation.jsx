import { useAuth } from '../hooks';
import { Li } from './Navigation.modules';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Li to="/">Home</Li>
      {isLoggedIn && <Li to="/contacts">Phonebook</Li>}
    </nav>
  );
};

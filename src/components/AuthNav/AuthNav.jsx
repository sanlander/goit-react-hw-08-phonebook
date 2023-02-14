import { Li } from './AuthNav.modules';

export const AuthNav = () => {
  return (
    <div>
      <Li to="/register">Register</Li>
      <Li to="/login">Log In</Li>
    </div>
  );
};

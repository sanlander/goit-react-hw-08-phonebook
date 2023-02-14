import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import { Div, P, Span } from './UserMenu.modules';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <P>
        Welcome, <Span> {user.name}</Span>
      </P>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Stack>
    </Div>
  );
};

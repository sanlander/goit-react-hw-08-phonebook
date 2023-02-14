import * as React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Div } from './RegisterForm.modules';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Div>
        <TextField
          required
          // id="outlined-input"
          label="Username"
          type="text"
          name="name"
          // autoComplete="current-password"
        />
        <TextField
          required
          // id="outlined-password-input"
          label="Email"
          type="email"
          name="email"
          // autoComplete="current-password"
        />
        <TextField
          required
          // id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          // autoComplete="current-password"
        />
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Stack>
      </Div>
    </Box>
  );
};

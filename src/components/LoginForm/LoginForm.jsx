import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Div } from './LoginForm.modules';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        <TextField required label="Email" type="email" name="email" />
        <TextField required label="Password" type="password" name="password" />
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">
            Log In
          </Button>
        </Stack>
      </Div>
    </Box>
  );
};

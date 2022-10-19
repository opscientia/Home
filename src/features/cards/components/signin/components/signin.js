import {
  Box,
  CardContent,
  Typography,
  InputBase,
  Stack,
  Button,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import IconUrl from 'src/utils/Icon';
import SigninCardStyled from './overrides/signinCardStyle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { userSelector, isAuthenticUser } from 'src/redux/userSlice';
import { useFormik, Form, FormikProvider } from 'formik';

function SigninCard() {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(userSelector);
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },

    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      if (
        user.userName === values.userName &&
        user.password === values.password
      ) {
        window.localStorage.setItem('login', true);
        dispatch(isAuthenticUser(values));
        navigate('/');
      } else {
        setErrors(alert('user Name or password is not valid'));
      }
    },
  });
  const { getFieldProps, handleSubmit } = formik;
  
  return (
    <SigninCardStyled>
      <CardContent>
        <Box textAlign='center' mb={2}>
          <Typography fontFamily="'Exo 2'" variant='h4' mt={1.4}>
            Sign In
          </Typography>
        </Box>
        <FormikProvider value={formik}>
          <Stack
            spacing={3}
            component={Form}
            autoComplete='off'
            noValidate
            onSubmit={handleSubmit}>
            <InputBase placeholder='Username' {...getFieldProps('userName')} />
            <Stack className='forget-pass'>
              <InputBase
                type={show ? 'text' : 'password'}
                fullWidth
                placeholder='Password'
                {...getFieldProps('password')}
                endAdornment={
                  <IconButton size='small' onClick={showPassword}>
                    <VisibilityIcon {...(show && { color: 'primary' })} />
                  </IconButton>
                }
              />
              <Link to='/'>forgot password?</Link>
            </Stack>
            <LoadingButton
              type='submit'
              variant='contained'
              className='btn-signin'>
              Sign in
            </LoadingButton>
            <Button
              sx={{ textTransform: 'capitalize', fontFamily: "'Exo 2'" }}
              variant='holo'
              startIcon={<IconUrl path='holo' />}>
              Continue with Holo
            </Button>
            <Button
              sx={{
                textTransform: 'capitalize',
                fontFamily: "'Exo 2'",
                backgroundColor: 'success.main',
                borderColor: 'success.main',
                ':hover': { backgroundColor: 'success.main' },
              }}
              variant='holo'
              startIcon={<IconUrl path='holo' />}>
              Continue with ORCID
            </Button>
          </Stack>
        </FormikProvider>
        <Stack className='register' spacing={0.7} mt={4}>
          <Link to='/'>Forgot password?</Link>
          <Link to='/'>Don’t have an account?</Link>
          <Link to='/auth/signup'>Sign up</Link>
        </Stack>
      </CardContent>
    </SigninCardStyled>
  );
}

export default SigninCard;

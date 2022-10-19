import {
  Box,
  CardContent,
  Typography,
  InputBase,
  Stack,
  Button,
  Checkbox,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import IconUrl from "src/utils/Icon";
import SignupCardStyled from "./overrides/signupCardStyle";
import { useFormik, Form, FormikProvider } from 'formik';
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { userSignup } from 'src/redux/userSlice';
import { Link, useNavigate } from "react-router-dom";

function SigninCard() {
  const [state, setstate] = React.useState({
    showPass: false,
    showRePass: false,
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      rePassword: "",
      policyChecked: false,
    },
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      const { rePassword, policyChecked, ...rest } = values
      dispatch(userSignup({
        ...rest,
      }));
      resetForm();
      navigate('/auth/signin')

    }
  });
  const dispatch = useDispatch();
  const showPassword = (prop) =>
    setstate({
      ...state,
      [prop]: !state[prop],
    });
  const { values, getFieldProps, handleSubmit } = formik;
  return (
    <SignupCardStyled>
      <CardContent>
        <Box textAlign="center" mb={2}>
          <Typography fontFamily="'Exo 2'" variant="h4" mt={1.4}>
            Sign Up
          </Typography>
        </Box>

        <FormikProvider value={formik}>
          <Stack component={Form} autoComplete="off"
            noValidate
            onSubmit={handleSubmit} spacing={3}>
            <InputBase placeholder="Username"
              {...getFieldProps("userName")}
            />
            <InputBase type="email" placeholder="Email"
              {...getFieldProps("email")}
            />
            <InputBase
              type={state.showPass ? "text" : "password"}
              fullWidth
              placeholder="Password"
              {...getFieldProps("password")}
              endAdornment={
                <IconButton size="small" onClick={() => showPassword("showPass")}>
                  <VisibilityIcon {...(state.showPass && { color: "primary" })} />
                </IconButton>
              }
            />
            <InputBase
              type={state.showRePass ? "text" : "password"}
              fullWidth
              placeholder="Re-enter password"
              {...getFieldProps("rePassword")}
              endAdornment={
                <IconButton
                  size="small"
                  onClick={() => showPassword("showRePass")}
                >
                  <VisibilityIcon
                    {...(state.showRePass && { color: "primary" })}
                  />
                </IconButton>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.policyChecked}
                  name="policyChecked"
                  {...getFieldProps('policyChecked')}
                />
              }
              label="I have read and agree to the privacy policy, 
                        terms of use and community guidelines"
            />
            <LoadingButton type="subimt" variant="contained" className="btn-signin">
              Sign up
            </LoadingButton>
            <Button
              sx={{ textTransform: "capitalize", fontFamily: "'Exo 2'" }}
              variant="holo"
              startIcon={<IconUrl path="holo" />}
            >
              Continue with Holo
            </Button>
            <Button
              sx={{
                textTransform: "capitalize",
                fontFamily: "'Exo 2'",
                backgroundColor: "success.main",
                borderColor: "success.main",
                ":hover": { backgroundColor: "success.main" },
              }}
              variant="holo"
              startIcon={<IconUrl path="holo" />}
            >
              Continue with ORCID
            </Button>
          </Stack>
        </FormikProvider>
        <Stack className="register" spacing={0.7} mt={4}>
          <Link to="/auth/signin">Already have an account?</Link>
          <Link to="/auth/signin">Sign in</Link>
        </Stack>
      </CardContent>
    </SignupCardStyled>
  );
}

export default SigninCard;

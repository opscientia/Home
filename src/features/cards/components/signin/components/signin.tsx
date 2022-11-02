import {
  Box,
  CardContent,
  Typography,
  InputBase,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import IconUrl from "@utils/Icon";
import SigninCardStyled from "./overrides/signinCardStyle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { userSelector, isAuthenticUser } from "@redux/userSlice";
import { useFormik, Form, FormikProvider } from "formik";

function SigninCard() {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);
  const dispatch = useDispatch();
  const navigate = useRouter();
  const { user } = useSelector(userSelector);
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      if (
        user.userName === values.userName &&
        user.password === values.password
      ) {
        window.localStorage.setItem("login", "true");
        dispatch(isAuthenticUser(values));
        navigate.push("/");
      } else {
        setErrors({
          userName: "invalid name",
          password: "invaild password",
        });
      }
    },
  });
  const { getFieldProps, handleSubmit } = formik;

  return (
    <SigninCardStyled>
      <CardContent>
        <Box textAlign="center" mb={2}>
          <Typography fontFamily="'Exo 2'" variant="h4" mt={1.4}>
            Sign In
          </Typography>
        </Box>
        <FormikProvider value={formik}>
          <Stack
            spacing={3}
            component={Form}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}>
            <InputBase placeholder="Username" {...getFieldProps("userName")} />
            <Stack className="forget-pass">
              <InputBase
                type={show ? "text" : "password"}
                fullWidth
                placeholder="Password"
                {...getFieldProps("password")}
                endAdornment={
                  <IconButton size="small" onClick={showPassword}>
                    <VisibilityIcon {...(show && { color: "primary" })} />
                  </IconButton>
                }
              />
              <Link href="/">forgot password?</Link>
            </Stack>
            <LoadingButton
              type="submit"
              variant="contained"
              className="btn-signin">
              Sign in
            </LoadingButton>
            <Button
              sx={{ textTransform: "capitalize", fontFamily: "'Exo 2'" }}
              variant="holo"
              startIcon={<IconUrl path="holo" />}>
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
              startIcon={<IconUrl path="holo" />}>
              Continue with ORCID
            </Button>
          </Stack>
        </FormikProvider>
        <Stack className="register" spacing={0.7} mt={4}>
          <Link href="/">Forgot password?</Link>
          <Link href="/">Don’t have an account?</Link>
          <Link href="/auth/signup">Sign up</Link>
        </Stack>
      </CardContent>
    </SigninCardStyled>
  );
}

export default SigninCard;

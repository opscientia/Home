import React from "react";
import { Stack } from "@mui/material";
import { SigninCard, SigninOrcidCard } from "src/features/cards";
import img from "src/assets/images/background-signin.png";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "src/redux/userSlice";
export default function Signin() {
  const { isAuthentic } = useSelector(userSelector);
  if (isAuthentic) {
    return <Navigate to="/" replace />;
  }
  return (
    <Stack
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        px: 2,
        py: 15,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <SigninOrcidCard />
    </Stack>
  );
}

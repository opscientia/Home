import React from "react";
import { Stack } from "@mui/material";
import { SignupCard } from "src/features/cards";
import img from "src/assets/images/background-signin.png";
export default function Signin() {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        px: 2,
        py: 15
      }}
      height={{ xs: "100%", md: "auto" }}
      alignItems="center"
      justifyContent="center"
    >
      <SignupCard />
    </Stack>
  );
}

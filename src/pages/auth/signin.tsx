import React from "react";
import { Stack } from "@mui/material";
import { SigninCard, SigninOrcidCard } from "@features/cards";
import { NextResponse } from "next/server";
import { useSelector } from "react-redux";
import { userSelector } from "@redux/userSlice";
import { AuthLayout } from "@features/layouts";
export default function Signin() {
  const { isAuthentic } = useSelector(userSelector);
  if (isAuthentic) {
    return NextResponse.redirect("/");
  }
  return (
    <Stack
      sx={{
        backgroundImage: `url(/static/images/background-signin.png)`,
        backgroundSize: "cover",
        px: 2,
        py: 15,
      }}
      alignItems="center"
      justifyContent="center">
      <SigninCard />
    </Stack>
  );
}
Signin.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

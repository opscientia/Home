import React from "react";
import { Stack } from "@mui/material";
import { SigninCard, SigninOrcidCard } from "@features/cards";
import { NextResponse } from "next/server";
import { useSelector } from "react-redux";
import { userSelector } from "@redux/userSlice";
import { AuthLayout } from "@features/layouts";
import { checkCookies, getCookie, getCookies } from "cookies-next";

export default function Signin() {
  
  return (
    <Stack
      sx={{
        backgroundImage: `url(/static/images/background-signin.png)`,
        backgroundSize: "cover",
        px: 2,
        py: 15,
        height: '100vh'
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

export async function getServerSideProps({ req, res }) {
  try {
    const cookieExists = getCookie("token", { req, res });
    console.log("cookie Exists:" + cookieExists);
    if (cookieExists) return { redirect: { destination: "/account" } };
    return { props: {} };
  } catch (err) {
    return { props: {} };
  }
}
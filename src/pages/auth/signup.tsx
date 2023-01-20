import React from "react";
import { Stack } from "@mui/material";
import { SignupCard } from "@features/cards";
import { AuthLayout } from "@features/layouts";
import { checkCookies, getCookie, getCookies } from "cookies-next";

export default function SignUp() {
  return (
    <Stack
      sx={{
        backgroundImage: `url(/static/images/background-signin.png)`,
        backgroundSize: "cover",
        px: 2,
        py: 15,
      }}
      height={{ xs: "100%", md: "auto" }}
      alignItems="center"
      justifyContent="center">
      <SignupCard />
    </Stack>
  );
}
SignUp.getLayout = function getLayout(page: React.ReactElement) {
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
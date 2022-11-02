import React from "react";
import { Header } from "@features/base";
function AuthLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default AuthLayout;

import { Box } from "@mui/material";

import React from "react";
import { Cookies } from "@features/cookies";
import { Header, Footer } from "@features/base";

function MainLayout({ children }) {
  return (
    <Box component="main">
      <Header />
      {children}
      <Footer />
      <Cookies />
    </Box>
  );
}

export default MainLayout;

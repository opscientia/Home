import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";

import { Typography, CardContent, Box } from "@mui/material";
import Icon from "@utils/Icon";
function DonateCard3() {
  return (
    <TestmonialStyled>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon path="comas" />
        </Box>
        <Typography variant="h5" fontWeight={400} mt={4} gutterBottom>
          “I'm at the beginning of my DeSci career and as an orthopedic surgeon i would like to integrate the Web3 world and technology into my profession.”
        </Typography>
        {/* <Typography
          align="center"
          color="primary"
          variant="h4"
          fontWeight={500}>
          John Doe
        </Typography> */}
        
      </CardContent>
    </TestmonialStyled>
  );
}

export default DonateCard3;

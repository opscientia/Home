import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";

import { Typography, CardContent, Box } from "@mui/material";
import Icon from "@utils/Icon";
function DonateCard4() {
  return (
    <TestmonialStyled>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon path="comas" />
        </Box>
        <Typography variant="h5" fontWeight={400} mt={4} gutterBottom>
          “As a scientist is tied to publication output, and the publication system is both predatory and exploitative. Scientists are not fairly compensated for the time and effort they put into research.”
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

export default DonateCard4;

import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";

import { Typography, CardContent, Box } from "@mui/material";
import Icon from "@utils/Icon";
function DonateCard2() {
  return (
    <TestmonialStyled>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon path="comas" />
        </Box>
        <Typography variant="h5" fontWeight={400} mt={4} gutterBottom>
          “Funding schemes and how the publish-or-perish cycle gets us trapped in salami-slicing results. Also, the publishing industry hijacking the Open Access philosophy for their own profit”
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

export default DonateCard2;

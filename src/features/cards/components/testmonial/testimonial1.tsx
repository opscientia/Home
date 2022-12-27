import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";

import { Typography, CardContent, Box } from "@mui/material";
import Icon from "@utils/Icon";
function DonateCard1() {
  return (
    <TestmonialStyled>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon path="comas" />
        </Box>
        <Typography variant="h5" fontWeight={400} mt={4} gutterBottom>
          “I am very new to research and so far have done nothing but undergraduate work. I don't have my Bachelors degree yet. Regardless, I would like to get involved in the DeSci community, build my experience, and contribute however I can.”
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

export default DonateCard1;

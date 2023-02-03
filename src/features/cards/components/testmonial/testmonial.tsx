import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";
import { Typography, CardContent, Box } from "@mui/material";
import Icon from "@utils/Icon";
function DonateCard() {
  return (
    <TestmonialStyled>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon path="comas" />
        </Box>
        <Typography variant="h5" fontWeight={400} mt={4} gutterBottom>
          “I think it’s great. I’m usually very depressed about science for most
          of the year. Our generation thinks differently and sees what our
          supervisors are battling. We see it has to work differently to how it
          is now”
        </Typography>
        <Typography
          align="center"
          color="primary"
          variant="h4"
          fontWeight={500}>
          John Doe
        </Typography>
        
      </CardContent>
      
    </TestmonialStyled>
  );
}

export default DonateCard;

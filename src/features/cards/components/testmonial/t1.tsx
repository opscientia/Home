import React from "react";
import TestmonialStyled from "../testmonial/overrides/testmonialStyle";
import { Typography, CardContent, Box } from "@mui/material";
import Icon from "@utils/Icon";
function t1({data}) {
  return (
    <TestmonialStyled>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon path="comas" />
        </Box>
        <Typography variant="h5" fontWeight={400} mt={4} gutterBottom>
          {data}
        </Typography>
        {/* <Typography
          align="center"
          color="primary"
          variant="h4"
          fontWeight={500}
        >
          {data.credit}
        </Typography> */}
      </CardContent>
    </TestmonialStyled>
  );
}

export default t1;

import React from "react";
import SponcersStyled from "./overrides/sponcersStyle";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

function Sponcers() {
  return (
    <SponcersStyled component="section">
      <Box>
        <Typography
          letterSpacing={2.4}
          mb={3}
          variant="h1"
          color="primary"
          textAlign="center"
          fontFamily="'Exo 2'"
          fontWeight={500}
        >
          SPONSOR & PARTNERS
        </Typography>
        <Box justifyContent="center" display="flex" px={3}>
          <img src="static/images/Line 1.png" alt="fasdf" />
        </Box>
      </Box>

      <Box className="sponsor-container" px={3}>
        <Marquee speed={70} gradient={false}>
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Filecoin.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/DeSci Labs.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Ocean Protocol.svg"
          />
          <Box sx={{ mx: 5 }} component="img" src="/static/icons/Lobby3.svg" />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/DeSci Foundation.svg"
          />
        </Marquee>
      </Box>
    </SponcersStyled>
  );
}

export default Sponcers;

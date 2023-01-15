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
        <Marquee speed={50} gradient={false}>
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Filecoin.svg"
          />
           <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Gitcoin.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Protocol Labs.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Desci World.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Fleming.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Active Inference Lab.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Foresight.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Kernel.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Lab DAO.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Web3 Women.svg"
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

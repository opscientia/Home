import React from "react";
import JoinStyled from "./overrides/joinStyle";
import { Container, Box, Typography, Button } from "@mui/material";
import JoinModal from "./JoinModal";

function Join() {
  return (
    <JoinStyled component="section">
      <Container>
        <Box>
          <JoinModal />
        </Box>

        <Typography
          color="primary"
          variant="h1"
          fontFamily="'Exo 2'"
          fontWeight={400}
        >
          Join The Movement
        </Typography>

        <Box maxWidth={{ xs: "100%", sm: "85%" }} mx="auto">
          <Typography
            mt={3}
            mb={3}
            variant="h5"
            fontFamily="'Epilogue'"
            fontWeight={400}
          >
            Our community is building the rails for open science research
            workflows that are findable, accessible, interoperable and
            repeatable. Active working groups include decentralized file storage
            for research data management, verifiable scientific reputation, game
            theoretic peer review, and innovating on the scientific paper as a
            digital knowledge artifact.
          </Typography>
        </Box>

<a href="http://verse.opsci.io/">

</a>
        <Button className="join-btn">APPLY FOR MEMBERSHIP</Button>
      </Container>
    </JoinStyled>
  );
}

export default Join;

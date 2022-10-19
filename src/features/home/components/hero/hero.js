import React from "react";
import HeroStyled from "./overrides/heroStyle";

import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import Icon from "src/utils/Icon";

function Hero() {
  return (
    <HeroStyled component="section">
      <Container>
        <Grid
          container
          justifyContent="center"
          direction={{ xs: "row-reverse" }}
        >
          <Grid item md={6} sm={12}>
            <Box className="hero-img">
              <Icon path="hero-img" className="logo" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box py={3}>
              <Box>
                <Typography
                  variant="h1"
                  textTransform="uppercase"
                  fontFamily="'Exo 2'"
                  fontWeight={500}
                >
                  An Autonomous
                </Typography>

                <Typography
                  variant="h1"
                  textTransform="uppercase"
                  fontFamily="'Exo 2'"
                  fontWeight={500}
                >
                  Open Science Society
                </Typography>
              </Box>

              <Divider
                sx={{
                  my: 3,
                  background:
                    "linear-gradient(270deg, #FEC6C6 0%, #6BB5FF 42.71%, #FEC6C6 100%)",
                }}
              />

              <Box>
                <Typography
                  variant="h5"
                  fontFamily="'Epilogue'"
                  fontWeight={400}
                >
                  Pay-to-learn, a replication crisis, incomplete archives, and
                  broken incentives make it clear “Science needs a firmware
                  update"
                </Typography>
                <Box my={2}>
                  {" "}
                  <Button className="hero-btn">EXPLORE</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroStyled>
  );
}

export default Hero;

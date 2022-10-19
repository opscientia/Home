import React, { useEffect, useRef } from "react";
import HeroStyled from "./overrides/heroStyle";
import {
  Container,
  Stack,
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import useWindowSize from "src/hooks/windowResize";
import Icon from "src/utils/Icon";
function Hero() {
  const [offSetLeft, setOffSetLeft] = React.useState(0);
  const heroRef = useRef(null);
  const windowSize = useWindowSize();
  useEffect(() => {
    setOffSetLeft(heroRef.current.getBoundingClientRect().left);
  }, [windowSize]);
  return (
    <HeroStyled component="section" styleprops={offSetLeft}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              className="title"
              ref={heroRef}
              fontWeight={300}
              fontFamily="Montserrat"
              variant="h1"
              color="primary"
            >
              OPSCI
            </Typography>
            <Typography fontWeight={400} fontFamily="Montserrat" variant="h3">
              A community of open science activists, researchers, organisers and
              enthusiasts that have come together to work on the problems of
              data sharing, reproducibility, incentive alignment, coordination,
              and intellectual ownership that plague knowledge creation today.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              height={1}
              justifyContent="center"
              alignItems="center"
            >
              <Icon path="Image" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </HeroStyled>
  );
}

export default Hero;

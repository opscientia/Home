import React from "react";
import HeroStyled from "./overrides/heroStyle";
import AboutStyled from "../about/overrides/aboutStyle";
import { useRouter } from "next/router";
import useWindowSize from "@hooks/windowResize";

import { AlertInfoBanner } from "@features/alertInfoBanner";

import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  Stack,
  Alert,
} from "@mui/material";
import Icon from "@utils/Icon";

function Hero() {
  const navigate = useRouter();
  const [offSetLeft, setOffSetLeft] = React.useState(0);
  const left = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetLeft(left?.current?.getBoundingClientRect()?.left);
  }, [windowSize]);

  return (
    <HeroStyled component="section">
      <Box sx={{width:'100vw'}}> 
        <AlertInfoBanner />
        <Grid
          container
          justifyContent="center"
          sx={{ mt: "50px",padding:'50px' }}
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
                  A professional society for high impact scientists with
                  verified open science activity. Link academic credentials,
                  mint a unique profile, publish openly, and receive rewards.
                </Typography>

                <Typography
                mt={3}
                variant="h5"
                fontFamily="'Epilogue'"
                fontWeight={400}>
                Join us and experiment with a web-native autonomous framework
                for research that is community-owned, built on open source
                protocols, runs on a decentralized network, and engineered for
                digital collaboration.
              </Typography>
                {/* <Typography
                  variant="h5"
                  marginTop={2}
                  fontFamily="'Epilogue'"
                  fontStyle={"italic"}
                  fontWeight={300}
                >
                  Applications Open Soon
                </Typography> */}
                <Box my={2}>
                  {" "}
                  <Button className="hero-btn">Apply</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </HeroStyled>
  );
}

export default Hero;

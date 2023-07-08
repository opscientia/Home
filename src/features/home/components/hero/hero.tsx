import React from "react";
import HeroStyled from "./overrides/heroStyle";
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
import Link from "next/link";

function Hero() {
  const navigate = useRouter();
  const [offSetLeft, setOffSetLeft] = React.useState(0);
  const left = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetLeft(left?.current?.getBoundingClientRect()?.left);
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [windowSize]);

  return (
    <>
      <HeroStyled component="section">
        <Container>
          <AlertInfoBanner />
          <Grid
            container
            justifyContent="center"
            sx={{ mt: "50px" }}
            direction={{ xs: "row-reverse" }}
          >
            <Grid item md={6} sm={12}>
              <Box className="hero-img">
                <Icon path="hero-img" className="logo" cursorPref="none" />
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
                    Knowledge
                  </Typography>

                  <Typography
                    variant="h1"
                    textTransform="uppercase"
                    fontFamily="'Exo 2'"
                    fontWeight={500}
                  >
                    For the People
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
                    mt={3}
                    variant="h5"
                    fontFamily="'Epilogue'"
                    fontWeight={400}
                  >
                    A framework for web-native research that is community-owned, built on
                    open source protocols, runs on a decentralized network, and
                    is engineered for digital collaboration.
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
                    <Button
                      className="hero-btn"
                      data-tf-popup="cC0QmNuC"
                      data-tf-opacity={100}
                      data-tf-size={100}
                      data-tf-iframe-props="title=Verse User Registration Form"
                      data-tf-transitive-search-params=""
                      data-tf-medium="snippet"
                    >
                      Apply
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroStyled>
    </>
  );
}

export default Hero;

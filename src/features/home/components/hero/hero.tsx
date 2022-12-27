import React from "react";
import HeroStyled from "./overrides/heroStyle";
import styles from "../../../../styles/Home.module.css";
import {Link} from "react-scroll";

import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import Icon from "@utils/Icon";

function Hero() {
  return (
    <HeroStyled component="section">
      <Container>
        <Grid
          container
          justifyContent="center"
          direction={{ xs: "row-reverse" }}>
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
                  fontWeight={500}>
                  An Autonomous
                </Typography>

                <Typography
                  variant="h1"
                  textTransform="uppercase"
                  fontFamily="'Exo 2'"
                  fontWeight={500}>
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
                  fontWeight={400}>
                  A professional society for high impact scientists with verified open science activity
                </Typography>
                <Typography
                  variant="h5"
                  fontFamily="'Epilogue'"
                  fontWeight={400}>
                  Link academic credentials, mint a unique profile, publish openly, and receive rewards
                </Typography>
                <Typography
                  variant="h6"
                  fontFamily="'Epilogue'"
                  fontStyle="italic"
                  fontWeight={200}>
                  *Applications Open Soon
                </Typography>
                <Box my={2}>
                  {" "}
                  <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>
                  <Button className="hero-btn"><div className={styles.bounce}>
  <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
</div>EXPLORE</Button>
        </Link>
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

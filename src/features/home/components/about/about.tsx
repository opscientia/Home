import React from "react";
import AboutStyled from "./overrides/aboutStyle";
import { Container, Stack, Box, Typography, Grid, Button } from "@mui/material";
import { useRouter } from "next/router";
import useWindowSize from "@hooks/windowResize";
import styles from "../../../../styles/Home.module.css";
import {Link} from "react-scroll";
function About() {
  const navigate = useRouter();
  const [offSetLeft, setOffSetLeft] = React.useState(0);
  const left = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetLeft(left.current.getBoundingClientRect().left);
  }, [windowSize]);
  return (
    <div id="about">
    <AboutStyled component="section" widthoffset={offSetLeft}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={10}>
            <Stack pt={8} className="inner">
              <Typography
                className="title"
                variant="h1"
                fontFamily="'Exo 2'"
                fontWeight={500}
                ref={left}>
                Science needs a firmware update
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

              <Box mt={2}>
                <Button
                  className="about-btn"
                  onClick={() => navigate.push("/about")}>
                  Apply
                </Button>
                <Link activeClass="active" to="ecosystem" spy={true} smooth={true} offset={-70} duration={500}>
                <Button className={styles.learnMorebtn}>
                  Learn More
                </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </AboutStyled>
    </div>
  );
}

export default About;

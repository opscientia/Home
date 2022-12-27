import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";
import Iframe from "react-iframe";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import { Container } from "@mui/material";
import { TestmonialCard, TestmonialCard1, TestmonialCard3, TestmonialCard4, TestmonialCard2} from "@features/cards";
import { TwitterTweetEmbed} from 'react-twitter-embed';
import styles from "../../../../styles/Home.module.css"

import Slider from "react-slick";
import { StylesContext } from "@mui/styles";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  autoplay: true,
};
function Testmonial() {
  return (
    <TestmonialStyled component="section">
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
        <div className={styles.twitterFeedStyle}>
            <TwitterTweetEmbed 
            tweetId={'1600878691776544768'}
          />
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <Slider {...settings}>
            <TestmonialCard />
            <TestmonialCard1/>
            <TestmonialCard2 />
            <TestmonialCard3 />
            <TestmonialCard4 />
          </Slider>
        </Grid>
      </Grid>
      <Box className="scientist">
        <Container>
          <Stack direction="column" spacing={4}>
            <Box className="contribute" pt={5} fontWeight={400}>
              <Typography variant="h1" fontFamily="'Exo 2'" fontWeight={500}>
                Are you a <span className="scie">scientist</span>?
              </Typography>
              <Typography variant="h5" fontWeight="400" fontFamily="'Epilogue'">
                Contribute to the conversation
              </Typography>

              <Box my={2}>
                <Button variant="contained" className="testimonial-btn">
                  CLICK HERE
                </Button>
              </Box>
              <Box my={2}>
                <img src="static/images/Line 1.png" alt="aa" />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </TestmonialStyled>
  );
}

export default Testmonial;

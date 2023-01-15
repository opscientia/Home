import React from "react";
import TestmonialStyled from "./overrides/testmonialStyle";
import Iframe from "react-iframe";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import { Container } from "@mui/material";
import { TestmonialCard } from "@features/cards";
import Slider from "react-slick";
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

const quotes = [
  {
    quote:
      "Funding cvvvcvschemes and how the publish-or-perish cycle gets us trapped in salami-slicing results. Also, the publishing industry hijacking the Open Access philosophy for their own profit.",
  },
  {
    quote:
      "Fundxczxczxing schemes and how the publish-or-perish cycle gets us trapped in salami-slicing results. Also, the publishing industry hijacking the Open Access philosophy for their own profit.",
  },
];
function Testmonial() {
  return (
    <TestmonialStyled component="section">
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <a
            className="twitter-timeline"
            data-height="300"
            data-dnt="true"
            data-theme="dark"
            href="https://twitter.com/opscientia?ref_src=twsrc%5Etfw"
          >
            Tweets by opscientia
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </Grid>
        <Grid item md={6} xs={12}>
          <Slider {...settings}>
            <TestmonialCard
              data={
                "Funding schemes and how the publish-or-perish cycle gets us trapped in salami-slicing results. Also, the publishing industry hijacking the Open Access philosophy for their own profit."
              }
            />
            <TestmonialCard
              data={
                "My primary pain point is that worth as a scientist is tied to publication output, and the publication system is both predatory and exploitative. Relatedly, I also do not believe scientists are fairly compensated for the time and effort they put into both research and into service, the latter of which benefits the institutions (universities, publishers, etc.) with little tangible benefit to the person."
              }
            />
            <TestmonialCard
              data={
                "Publication process, non-transparency peer-review , pay to access pdfs, access to the others institutions' data, Collaboration between universities, Data verifications, Transparent and open reputational system that evaluate the scientist"
              }
            />
            <TestmonialCard
              data={
                "I'm at the beginning of my DeSci career and as an orthopedic surgeon i would like to integrate the Web3 world and technology into my profession."
              }
            />
            <TestmonialCard
              data={
                "It is exactly what science needs. Fair opportunities and rightful ownership of research. Allows us to truly own our identities on the internet. Researchers receive their fair share and move away from the pay-to-publish business model."
              }
            />
            <TestmonialCard
              data={
                "Absolutely wonderful. I can't wait to share this concept of DeSci with the researchers at my current university."
              }
            />
          </Slider>
        </Grid>
      </Grid>
      <Box className="scientist">
        <Container>
          <Stack direction="column" spacing={4}>
            <Box className="contribute" pt={5} fontWeight={400}>
              {/* <Typography variant="h1" fontFamily="'Exo 2'" fontWeight={500}>
                Are you a <span className="scie">scientist</span>?
              </Typography>
              <Typography variant="h5" fontWeight="400" fontFamily="'Epilogue'">
                Make your voice heard and contribute to the conversation on open
                science{" "}
              </Typography>

              <Box my={2}>
                <a href="https://form.typeform.com/to/cC0QmNuC">
                  <Button variant="contained" className="testimonial-btn">
                    CLICK HERE
                  </Button>
                </a>
              </Box> */}
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

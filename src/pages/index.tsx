import { checkCookies, getCookie, getCookies } from "cookies-next";
import Head from "next/head";
import React from "react";
import {
  Hero,
  About,
  Donate,
  Testmonial,
  Sponcers,
  Subscribe,
} from "@features/home";
import { OpsciCard } from "@features/cards";
import { Container, Grid, Box, useTheme } from "@mui/material";
import { MainLayout } from "@features/layouts";
const opsicarddata = [
  {
    icon: "/static/icons/Vector (3).svg",
    title: "Verse",
    description:
      "A portable account for web-native scientists that can be used to interact with any DeSci web application. Choose to be pseudonymous or not. Control how you present your scientific persona online. Prove your credentials while remaining private.",
    action: "CLAIM YOUR PROFILE",
    href: "https://form.typeform.com/to/cC0QmNuC",
  },
  {
    icon: "/static/icons/Research.svg",
    title: "Fellowship & Research",
    description:
      "The OpSci dWeb Fellowship is a 12-week program that provides a stipend for talented undergraduates, students, and post-doctoral scholars to work on open source software development and basic research that aligns with the Opscientia mission.",
    action: "*coming soon",
    href: "#",
  },
  {
    icon: "/static/icons/science.svg",
    title: "An Open Science Commons",
    description:
      "Commons is a free, open-access platform for publishing and discovering large scientific datasets, computational workflows, and digital laboratory notebooks. Knowledge artifacts are permanently archived on decentralized storage networks.",
    action: "DISCOVER & PUBLISH",
    href: "https://commons.opsci.io/",
  },
];

export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <Head>
        <title>OpSci Home</title>
        <meta name="description" content="An Autonomous Open Science Society" />
        <link rel="icon" href="/Group-react.png" />
      </Head>

      <Hero />
      <About />
      <Box
        pb={12}
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 49.48%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(static/images/card-img.png)",

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "600px",

          [theme.breakpoints.down("md")]: {
            background:
              "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/static/images/donate-bg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "auto",
          },
        }}
      >
        <Container>
          <Grid container justifyContent="center" spacing={3}>
            {opsicarddata.map((card, index) => (
              <Grid item md={4} sm={6} key={index}>
                <OpsciCard data={card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box>
        <Testmonial />
      </Box>
      <Sponcers />
     
      {/* <Subscribe /> */}
    </div>
  );
}
Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps({ req, res }) {
  try {
    const cookieExists = getCookie("token", { req, res });
    console.log("cookie Exists:" + cookieExists);
    return { props: {} };
  } catch (err) {
    return { props: {} };
  }
}

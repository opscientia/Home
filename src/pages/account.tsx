import { getCookie, removeCookies } from "cookies-next";
import Head from "next/head";
import React from "react";
import connect from "../lib/database";
import jwt from "jsonwebtoken";
import User from "../models/Users";
import { useRouter } from "next/router";
import { MainLayout } from "@features/layouts";
import Icon from "@utils/Icon";

import {
  Container,
  Grid,
  Box,
  useTheme,
  Typography,
  Divider,
  Button,
} from "@mui/material";

function Dashboard({ username, orcid, records }) {
  const router = useRouter();
  const theme = useTheme();

  const logout = () => {
    removeCookies("token");
    router.replace("/auth/signin");
  };

  return (
    <div>
      <Head>
        <title>Account|OpSci Home</title>
        <meta name="description" content="An Autonomous Open Science Society" />
        <link rel="icon" href="/Group-react.png" />
      </Head>
      <Box
        py={12}
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 49.48%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(static/images/card-img.png)",

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",

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
        
          {/* Example to display records
          Given name:
          {records["name"]["given-names"]["value"]}
          {"  "}
          Family name:
          {records["name"]["family-name"]["value"]} */}
        </Container>
        <Container>
          <Grid
            container
            justifyContent="center"
            direction={{ xs: "row-reverse" }}
          >
            <Grid item md={6} sm={12}>
              {/* <Box className="hero-img">Display profile picture here</Box> */}
            </Grid>
            <Grid item md={6}>
              <Box py={3}>
                <Box>
                  <Typography
                    variant="h2"
                    textTransform="uppercase"
                    fontFamily="'Exo 2'"
                    fontWeight={500}
                  >
                    Account
                  </Typography>
                 
                </Box>

                <Divider
                  sx={{
                    my: 3,
                    background:
                      "linear-gradient(270deg, #FEC6C6 0%, #6BB5FF 42.71%, #FEC6C6 100%)",
                  }}
                />
                 <Typography
                    variant="h4"
                    textTransform="uppercase"
                    fontFamily="'Exo 2'"
                    fontWeight={500}
                  >
                    Welcome {username}!
                  </Typography>

                <Box mt={2}>
                  <Typography
                    variant="h4"
                    fontFamily="'Epilogue'"
                    fontWeight={400}
                  >
                    Your authenticated ORCID is {orcid}
                  </Typography>
                  <Typography
                    variant="h6"
                    marginTop={2}
                    fontFamily="'Epilogue'"
                    fontStyle={"italic"}
                    fontWeight={300}
                  >
                    More dashboard features coming soon.
                  </Typography>
                  <Box my={2}>
                    {" "}
                    <Button onClick={logout} className="hero-btn">
                      Logout
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps({ req, res }) {
  try {
    // connect db
    await connect();
    // check cookie
    const token = getCookie("token", { req, res });
    if (!token) {
      console.error("token missing, login again");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    const obj = await User.findOne({ _id: verified.id });

    const URL = `https://api.sandbox.orcid.org/v3.0/${obj.orcid}/person`;
    const bearerToken = "Bearer" + obj.accessToken;
    const resp = await fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: bearerToken,
        "Content-Type": "application/vnd.orcid+json",
      },
    });

    const userRecords = await resp.json();
    console.log(userRecords);

    if (!obj)
      return {
        redirect: {
          destination: "/auth/signin",
        },
      };
    return {
      props: {
        orcid: obj.orcid,
        username: obj.username,
        records: userRecords,
      },
    };
  } catch (err) {
    console.error(err);
    removeCookies("token", { req, res });
    return {
      redirect: {
        destination: "/auth/signin",
      },
    };
  }
}

export default Dashboard;

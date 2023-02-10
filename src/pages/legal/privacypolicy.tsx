import { getCookie, removeCookies } from "cookies-next";
import Head from "next/head";
import React from "react";
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
  List,
  ListItem,
} from "@mui/material";

function PrivacyPolicy() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <div>
      <Head>
        <title> Privacy policy| OpSci Home</title>
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
                    Privacy policy
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
                  variant="h6"
                  textTransform="uppercase"
                  fontFamily="'Exo 2'"
                  fontWeight={500}
                  gutterBottom
                >
                  Last updated February 01, 2023
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  This privacy notice for Opscientia Labs Inc (doing business as
                  OpSci) ("OpSci," "we," "us," or "our"), describes how and why
                  we might collect, store, use, and/or share ("process") your
                  information when you use our services ("Services"), such as
                  when you:
                </Typography>
                <List>
                  <ListItem>
                    Visit our website at https://www.opsci.io/, or any website
                    of ours that links to this privacy notice
                  </ListItem>
                  <ListItem>
                    Engage with us in other related ways, including any sales,
                    marketing, or events
                  </ListItem>
                </List>
                <Typography gutterBottom variant="caption">
                  Questions or concerns? Reading this privacy notice will help
                  you understand your privacy rights and choices. If you do not
                  agree with our policies and practices, please do not use our
                  Services. If you still have any questions or concerns, please
                  contact us at shady@opscientia.com.
                </Typography>

                <div>
                  <div>
                    <div style={{ lineHeight: "1.5" }}>
                      <strong>
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="heading_1">
                            SUMMARY OF KEY POINTS
                          </span>
                        </span>
                      </strong>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>
                            <em>
                              This summary provides key points from our privacy
                              notice, but you can find out more details about
                              any of these topics by clicking the link following
                              each key point or by using our table of contents
                              below to find the section you are looking for. You
                              can also click&nbsp;
                            </em>
                          </strong>
                        </span>
                      </span>
                      <a data-custom-class="link" href="#toc">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">
                            <strong>
                              <em>here</em>
                            </strong>
                          </span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>
                            <em>
                              &nbsp;to go directly to our table of contents.
                            </em>
                          </strong>
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>
                            What personal information do we process?
                          </strong>{" "}
                          When you visit, use, or navigate our Services, we may
                          process personal information depending on how you
                          interact with <bdt className="block-component" />
                          <bdt className="question">OpSci</bdt>
                          <bdt className="else-block" /> and the Services, the
                          choices you make, and the products and features you
                          use. Click&nbsp;
                        </span>
                      </span>
                      <a data-custom-class="link" href="#personalinfo">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">here</span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          &nbsp;to learn more.
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>
                            Do we process any sensitive personal information?
                          </strong>{" "}
                          <bdt className="block-component" />
                          We do not process sensitive personal information.
                          <bdt className="else-block" />
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>
                            Do we receive any information from third parties?
                          </strong>{" "}
                          <bdt className="block-component" />
                          We may receive information from public databases,
                          marketing partners, social media platforms, and other
                          outside sources. Click&nbsp;
                        </span>
                      </span>
                      <a data-custom-class="link" href="#othersources">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">here</span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          &nbsp;to learn more.
                          <bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>How do we process your information?</strong>{" "}
                          We process your information to provide, improve, and
                          administer our Services, communicate with you, for
                          security and fraud prevention, and to comply with law.
                          We may also process your information for other
                          purposes with your consent. We process your
                          information only when we have a valid legal reason to
                          do so. Click&nbsp;
                        </span>
                      </span>
                      <a data-custom-class="link" href="#infouse">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">here</span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          &nbsp;to learn more.
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>
                            In what situations and with which{" "}
                            <bdt className="block-component" />
                            parties do we share personal information?
                          </strong>{" "}
                          We may share information in specific situations and
                          with specific <bdt className="block-component" />
                          third parties. Click&nbsp;
                        </span>
                      </span>
                      <a data-custom-class="link" href="#whoshare">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">here</span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          &nbsp;to learn more.
                          <bdt className="block-component" />
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>How do we keep your information safe?</strong>{" "}
                          We have <bdt className="block-component" />
                          organizational
                          <bdt className="statement-end-if-in-editor" /> and
                          technical processes and procedures in place to protect
                          your personal information. However, no electronic
                          transmission over the internet or information storage
                          technology can be guaranteed to be 100% secure, so we
                          cannot promise or guarantee that hackers,
                          cybercriminals, or other{" "}
                          <bdt className="block-component" />
                          unauthorized
                          <bdt className="statement-end-if-in-editor" /> third
                          parties will not be able to defeat our security and
                          improperly collect, access, steal, or modify your
                          information. Click&nbsp;
                        </span>
                      </span>
                      <a data-custom-class="link" href="#infosafe">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">here</span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          &nbsp;to learn more.
                          <bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>What are your rights?</strong> Depending on
                          where you are located geographically, the applicable
                          privacy law may mean you have certain rights regarding
                          your personal information. Click&nbsp;
                        </span>
                      </span>
                      <a data-custom-class="link" href="#privacyrights">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">here</span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          &nbsp;to learn more.
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          <strong>How do you exercise your rights?</strong> The
                          easiest way to exercise your rights is by filling out
                          our data subject request form available{" "}
                          <bdt className="block-component" />
                          here:{" "}
                          <bdt className="question">
                            <a
                              href="https://www.opsci.io/contactus"
                              target="_blank"
                              data-custom-class="link"
                            >
                              https://www.opsci.io/contactus
                            </a>
                          </bdt>
                          <bdt className="else-block" />, or by contacting us.
                          We will consider and act upon any request in
                          accordance with applicable data protection laws.
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          Want to learn more about what{" "}
                          <bdt className="block-component" />
                          <bdt className="question">OpSci</bdt>
                          <bdt className="else-block" /> does with any
                          information we collect? Click&nbsp;
                        </span>
                      </span>
                      <a data-custom-class="link" href="#toc">
                        <span style={{ fontSize: "15px" }}>
                          <span data-custom-class="body_text">here</span>
                        </span>
                      </a>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="body_text">
                          &nbsp;to review the notice in full.
                        </span>
                      </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
PrivacyPolicy.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default PrivacyPolicy;

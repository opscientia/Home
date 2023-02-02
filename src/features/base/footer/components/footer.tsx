import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  Stack,
  Button,
  Box,
  IconButton,
  ListItemButton,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import Icon from "@utils/Icon";
import FooterStyled from "./overrides/footerStyle";
import {
  nav1,
  nav2,
  navicon,
  buttons,
} from "@features/base/footer/components/config";


function Footer() {
  return (
    <FooterStyled component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Box mt={5}>
              <Link href="/" className="logo-link">
                <a>
                  <Icon path="opsci" className="logo" />
                </a>
              </Link>
              <Typography
                mt={3}
                variant="h5"
                textTransform="uppercase"
                fontFamily="'Exo 2'"
                fontWeight={500}
              >
                The Open Science Decentralized Autonomous Organization
              </Typography>
              <Stack direction="row" mt={3} spacing={2}>
                <Icon path="footer" className="logo" />
                <Icon path="holo-icon" className="logo" />
                <Icon path="Vector (1)" className="logo" />
                <Icon path="Vector (2)" className="logo" />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                
              
          
                <Stack
                  direction="row"
                  mt={3}
                  justifyContent="space-between"
                  className="nav-links"
                >
                  <List>
                    {nav1.map((item, i) => (
                      <ListItem key={item.name}>
                        <ListItemButton>
                          <Typography
                            variant="body1"
                            fontFamily="'Exo 2'"
                            color={i === 0 ? "primary" : "text.secondary"}
                            fontWeight={i === 0 ? "600" : "500"}
                          >
                            <Link href={item.path}>
                            {item.name}
                            </Link>

                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <List>
                    {nav2.map((item, i) => (
                      <ListItem key={item.name}>
                        <ListItemButton>
                          <Typography
                            variant="body1"
                            fontFamily="'Exo 2'"
                            color={i === 0 ? "primary" : "text.secondary"}
                            fontWeight={i === 0 ? "600" : "500"}
                          >
                            <Link href={item.path}>

                            {item.name}
                            </Link>
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                        
                  
                </Stack>
                
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
        <Box mt={11}>
          <Grid
            container
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={7} sm={12}>
              <Stack
                direction={{ sm: "row", xs: "column" }}
                justifyContent={{ sm: "center" }}
                spacing={2}
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  textTransform="uppercase"
                  fontFamily="'Exo 2'"
                  fontWeight={500}
                >
                  CONNECT WITH US
                </Typography>
                <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                  {navicon.map((item) => (
                    <a href={item.path}>
                      <IconButton className="btn-icon" key={item.name}>
                        <Icon path={item.name} />
                      </IconButton>
                    </a>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Stack alignItems={{ xs: "center", sm: "start" }}>
                <List dense className="policy-privacy">
                  <ListItem>
                    <Link href="/">
                      <a>© OpSci {new Date().getFullYear()}</a>
                    </Link>
                    <Link href="/">
                      <a>Privacy Policy</a>
                    </Link>
                    <Link href="/">
                      <a>Terms of Use</a>
                    </Link>
                  </ListItem>
                </List>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FooterStyled>
  );
}

export default Footer;

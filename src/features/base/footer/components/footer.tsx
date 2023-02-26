import { nav1, nav2, navicon } from "@features/base/footer/components/config";
import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import Icon from "@utils/Icon";
import NextLink from "next/link";
import FooterStyled from "./overrides/footerStyle";

function Footer() {
  return (
    <FooterStyled component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} sx={{ ml: "auto", mr: "auto" }}>
            <Box mt={5}>
              <NextLink href="/" className="logo-link">
                <a>
                  <Icon path="opsci" className="logo" />
                </a>
              </NextLink>
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
                <Link href="https://opsci.io">
                  <Icon path="footer" className="logo" />
                </Link>
                <Link href="https://www.holonym.id/">
                  <Icon path="holo-icon" className="logo" />
                </Link>
                <Link href="https://commons.opsci.io/">
                  <Icon path="Vector (1)" className="logo" />
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sm={12}
            sx={{ display: "grid", alignItems: "flex-end" }}
          >
            <Stack
              direction={{ sm: "row", xs: "column" }}
              justifyContent={{ sm: "center" }}
              spacing={2}
              alignItems="center"
              sx={{ mt: "40px" }}
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
                  // <IconButton
                  //   className='btn-icon'
                  //   key={item.name}
                  //   // component='a'
                  //   href={item.path}>
                  //   <Icon path={item.name} />
                  // </IconButton>
                  <Box key={item.path} className="btn-icon">
                    <a href={item.path} target="_blank">
                      <Icon path={item.name} />
                    </a>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          {/* <Grid item xs={12} sm={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Stack
                  direction='row'
                  mt={3}
                  justifyContent='space-between'
                  className='nav-links'>
                  <List>
                    {nav1.map((item, i) => (
                      <ListItem key={item.name}>
                        <ListItemButton>
                          <Typography
                            variant='body1'
                            fontFamily="'Exo 2'"
                            color={i === 0 ? 'primary' : 'text.secondary'}
                            fontWeight={i === 0 ? '600' : '500'}>
                            <NextLink href={item.path}>{item.name}</NextLink>
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
                            variant='body1'
                            fontFamily="'Exo 2'"
                            color={i === 0 ? 'primary' : 'text.secondary'}
                            fontWeight={i === 0 ? '600' : '500'}>
                            <NextLink href={item.path}>{item.name}</NextLink>
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
        <Box mt={11}>
          <Grid
            container
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={5}>
              <Stack alignItems="center">
                <List dense className="policy-privacy">
                  <ListItem>
                    <NextLink href="/">
                      <a>© OpSci {new Date().getFullYear()}</a>
                    </NextLink>
                    <NextLink href="/">
                      <a>Privacy Policy</a>
                    </NextLink>
                    <NextLink href="/">
                      <a>Terms of Use</a>
                    </NextLink>
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

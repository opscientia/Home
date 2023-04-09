import {
  Toolbar,
  Typography,
  Link as MuiLink,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import CookiesStyled from "./overrides/cookiesStyle";
import useWindowSize from "@hooks/windowResize";
import useResponsive from "@hooks/useResponsive";

import Icon from "@utils/Icon";
function Cookies() {
  const isDesktop = useResponsive("up", "md");
  const theme = useTheme();
  const [offSetRight, setOffSetRight] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const right = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetRight(right?.current?.getBoundingClientRect()?.right);
  }, [windowSize]);

  const handleOnClick = () => {
    setShow(false);
  };

  return (
    show && (
      <CookiesStyled
        sx={{
          [theme.breakpoints.down("md")]: {
            background: "none",
          },
        }}
        position="fixed"
        width={offSetRight}
      >
        {isDesktop && (
          <Toolbar>
            <Typography>
              This site uses cookies, for purposeddddddddds included in our
              <MuiLink
                underline="none"
                className="privacy-link"
                target="_blank"
                href="https://opscientia.notion.site/Privacy-policy-a408c8bdc4bb4f3ca624b95b93136e9c"
              >
                Privacy Policy
              </MuiLink>
              .
            </Typography>
            <MuiLink
              underline="none"
              sx={{
                fontFamily: "'Exo 2'",
                fontStyle: "italic",
                ml: 1,
                cursor: "pointer",
              }}
              onClick={handleOnClick}
            >
              I accept
            </MuiLink>
            <Box className="line" ref={right} />
          </Toolbar>
        )}
        {!isDesktop && (
          <Toolbar className="toolbar" sx={{ background: "red" }}>
            <IconButton
              sx={{ position: "absolute", right: 15, top: 0 }}
              onClick={handleOnClick}
            >
              <Icon mx={2} path="Cancel" />
            </IconButton>

            <Box className="color">
              <Icon path="clr" />

              <Typography sx={{ mx: 2 }}>
                This site uses cookies, for purposes
                <br /> included in our{" "}
                <MuiLink
                  underline="none"
                  className="privacy-link"
                  target="_blank"
                  href="https://opscientia.notion.site/Privacy-policy-a408c8bdc4bb4f3ca624b95b93136e9c"
                >
                  Privacy Policy
                </MuiLink>
                .
              </Typography>
            </Box>

            <Box display="none" className="line" ref={right} />
          </Toolbar>
        )}
      </CookiesStyled>
    )
  );
}

export default Cookies;

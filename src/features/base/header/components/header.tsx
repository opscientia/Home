import * as React from "react";
import { useEffect } from "react";

import Toolbar from "@mui/material/Toolbar";
import Icon from "@utils/Icon";
import Link from "next/link";
import HeaderStyled from "./overrides/headerStyle";
import { Box, Fab, IconButton } from "@mui/material";
import { Menu } from "@features/menu";
import * as menu from "./config";
import { useRouter } from "next/router";
import useResponsive from "@hooks/useResponsive";
import { MobileDialog } from "@features/dialog";
import { useSelector } from "react-redux";
import { userSelector } from "@redux/userSlice";
import MenuPopover from "./menuPopover";

import { AlertInfoBanner } from "@features/alertInfoBanner";

export default function BasicAppBar() {
  const { isAuthentic, user, authenticatedUser } = useSelector(userSelector);
  const navigate = useRouter();
  const [scrollY, setScrollY] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = (e) => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isDesktop = useResponsive("up", "md");
  return (
    <>
      {isDesktop && (
        <HeaderStyled
          position="fixed"
          className={scrollY > 200 ? "scrolled" : ""}
        >
          
          <Toolbar>
            <Link href="/">
              <a>
                <Icon path="logo" className="logo" />
              </a>
            </Link>

            <Box ml={"auto"}>
              <Menu menu={menu} />
            </Box>
            {/* {isAuthentic ? (
              <MenuPopover user={user} />
            ) : (
              <Fab
                onClick={() =>
                  !authenticatedUser && navigate.push("/auth/signin")
                }
                variant="extended"
                size="small"
                color="primary"
                className="btn-sign"
              >
                {authenticatedUser ? "Welcome Test User" : "Sign In"}
              </Fab>
            )} */}
          </Toolbar>
        </HeaderStyled>
      )}
      {!isDesktop && (
        <HeaderStyled
          position="fixed"
          className={scrollY > 200 ? "scrolled" : ""}
        >
          <Toolbar>
            <Link href="/">
              <a>
                <Icon path="logo" className="logo" />
              </a>
            </Link>
            <IconButton sx={{ ml: "auto" }} onClick={() => setOpen(true)}>
              <Icon path="humberg" className="humberg" />
            </IconButton>
          </Toolbar>
          <MobileDialog open={open} handleClose={() => setOpen(false)} />
        </HeaderStyled>
      )}
    </>
  );
}

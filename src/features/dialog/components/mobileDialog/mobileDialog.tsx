import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import { Menu } from "@features/menu";
import * as menu from "@features/base";
import Icon from "@utils/Icon";
import { Stack, Button, Container } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MobileDialog({ ...props }) {
  const { open, handleClose } = props;
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ bottom: "unset" }}
        PaperProps={{
          style: {
            background: "#191919",
            paddingBottom: 24,
          },
        }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            mb: 3,
          }}>
          <Toolbar>
            <Link href="/">
              <a>
                <Icon path="Logo Header" />
              </a>
            </Link>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ ml: "auto" }}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu menu={menu} />
        <Container>
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontFamily: "'Exo 2'",
                fontWeight: "bold",
              }}>
              Sign in
            </Button>
            <Button
              sx={{ textTransform: "capitalize", fontFamily: "'Exo 2'" }}
              variant="holo"
              startIcon={<Icon path="holo" />}>
              Continue with Holo
            </Button>
          </Stack>
        </Container>
      </Dialog>
    </div>
  );
}

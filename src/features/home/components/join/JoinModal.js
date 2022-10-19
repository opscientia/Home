import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Zoom from '@mui/material/Zoom';
import { Box } from "@mui/material";
import Link from "@mui/material/Link";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box>
        <Link className="hover" onClick={handleClickOpen} sx={{
          '& img': {
            transform: 'scale(0.8)',
            width: '100%',
            maxWidth: '100%'
          }
        }}>
          <Box component="img" src="/static/icons/opsci-dao.svg" />
        </Link>
      </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          '& .MuiPaper-root': {
            background: '#000',
            backdropFilter: 'blur(20px)'
          }
        }}
      >
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
            position: "relative",
            background: "transparent",
            textAlign: 'center',

          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{

          display: 'flex',
          alignItem: 'flex-start',
          justifyContent: 'center',
          img: {
            width: '100%',
            maxWidth: '100%',

          }
        }}>
          <Box component="img" src="/static/icons/opsci-dao.svg" />
        </Box>
      </Dialog>
    </Box>
  );
}

import React from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SubscribeStyled from "./overrides/subscribeStyle";

import {
  Stack,
  Box,
  Typography,
  InputBase,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import useWindowSize from "@hooks/windowResize";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

function Sponcers() {
  const theme = useTheme();
  const apiKey = process.env.SIB;
  const [offSetLeft, setOffSetLeft] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const left = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetLeft(left?.current?.getBoundingClientRect()?.left);
  }, [windowSize]);

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  const { register, handleSubmit, watch, formState } = useForm<Inputs>();
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setOpen(true);
    setIsSuccessfullySubmitted(true);

    console.log(data);    

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key":
          apiKey
      },
      body: JSON.stringify({ listIds: [5], updateEnabled: false, email: data.email }),
    };

    fetch("https://api.sendinblue.com/v3/contacts", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error('error ' + err));
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <SubscribeStyled component="section" widthoffset={offSetLeft}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <Grid className="email" item md={8}>
            <Grid container justifyContent="center" direction="row-reverse">
              <Grid item className="rectangle" md={5} sm={12}>
                <Box
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      img: { visibility: "hidden", width: "100%" },
                    },
                  }}
                >
                  <img src="static/images/react.png" alt="react" />
                </Box>
              </Grid>
              <Grid item md={7} p={3} className="sbscribe">
                <Stack spacing={2}>
                  <Typography
                    ref={left}
                    variant="h1"
                    fontFamily="'Exo 2'"
                    fontWeight="600"
                    className="title-line"
                  >
                    Subscribe
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="400"
                    fontFamily="'Epilogue'"
                  >
                    Subscribe to receive newsletter updates on events and
                    activities in the DeSci space.
                  </Typography>
                  <Box className="field-wrapper">
                    <Stack direction="row" p={1.5} width={1}>
                      <Box>
                        <InputBase
                          className="emil"
                          type="email"
                          placeholder="Email"
                          {...register("email")}
                        />
                      </Box>
                    </Stack>
                    <Button fullWidth className="subscribe-btn" type="submit">
                      Subscribe
                    </Button>
                  </Box>
                  {formState.isSubmitted && (
                     <Snackbar
                     open={open}
                     autoHideDuration={5000}
                     onClose={handleClose}
                     message="Thank you for Subscribing!"
                     action={action}
                   />
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </SubscribeStyled>
  );
}

export default Sponcers;

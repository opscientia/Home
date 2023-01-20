import React from "react";
// import connect from "src/lib/database";
// import Subscriber from "src/models/Subscriber";
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
  const [offSetLeft, setOffSetLeft] = React.useState(0);
  const left = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetLeft(left?.current?.getBoundingClientRect()?.left);
  }, [windowSize]);

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  const { register, handleSubmit, watch, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSuccessfullySubmitted(true);
    // const newSubscriber = new Subscriber({ email: data.email });
    // await newSubscriber.save();
    console.log(data);
  };

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
                          defaultValue="test@email.com"
                          {...register("email")}
                        />
                      </Box>
                    </Stack>
                    <Button fullWidth className="subscribe-btn" type="submit">
                      Subscribe
                    </Button>
                  </Box>
                  {formState.isSubmitted && (
                    <div className="success">Thank you for subscribing !</div>
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

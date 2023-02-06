import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Link, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GradientText from "./GradientText";

// import GradientText from './GradientText';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
        },
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        px: 2,
        borderRadius: {
          xs: "12px",
          sm: "32px",
        },
        maxWidth: "fit-content",
        mx: "auto",
        background: "rgba(65, 66, 96, 0.5)",
        "& p": {
          fontSize: {
            xs: 13,
            sm: 16,
          },
        },
      }}
    >
      <Typography>Check out our case study</Typography>{" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            ml: {
              sm: 0.2,
            },
          }}
        >
          {" "}
          by Filecoin
        </Typography>
        <Box
          sx={{
            width: 5,
            height: 5,
            background: "#fff",
            borderRadius: 6,
          }}
        />{" "}
        <Link href="https://fil.org/blog/case-study-opsci-how-an-open-science-commons-project-built-on-web3-infrastructure-empowers-community-discovery/">
          <GradientText
            title="See Case Study"
            gradient="linear-gradient(89.94deg, #FEC6C6 -29.79%, #FDA0FF 101.25%)"
          />
        </Link>{" "}
        <KeyboardArrowRightIcon
          sx={{
            color: "#FDA0FF",
            ml: -1,
          }}
        />
      </Box>
    </Box>
  );
}

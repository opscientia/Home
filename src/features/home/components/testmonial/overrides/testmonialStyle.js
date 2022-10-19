import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const TestmonialStyled = styled(Box)(({ theme }) => ({
  "& .scientist": {
    paddingTop: theme.spacing(10),
    background:
      "linear-gradient(180deg, #201846 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      [theme.breakpoints.up("md")]: {
        backgroundImage: "url('/static/images/Holographic.png')",
        backgroundRepeat: "no-repeat",
      },
      display: { md: "block", sm: "none" },
    },
  },
  "& .testimonial-btn": {
    fontFamily: "'Exo 2'",
  },
  "& .contribute": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      alignItems: "start",
      justifyContent: "start",
    },
  },
  "& .scie": {
    color: "#FEC6C6",
  },

  "& .MuiAppBar-root": {
    "& .MuiToolbar-root": {
      minHeight: theme.spacing(13),
      padding: theme.spacing(0),

      "& .line": {
        width: "calc(100% - 10px)",
        height: 1,
        backgroundColor: theme.palette.primary.main,
        position: "relative",
        top: 14,
        "&:before": {
          content: '""',
          position: "absolute",
          top: -3.5,
          right: 0,
          width: 8,
          height: 8,
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
        },
      },
    },
  },
}));
export default TestmonialStyled;

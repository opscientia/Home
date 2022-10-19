import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const HeroStyled = styled(Box)(({ theme, widthOffset }) => ({
  paddingBottom: theme.spacing(20),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(/static/images/about2.png)",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: 644,
  [theme.breakpoints.down("md")]: {
    paddingBottom: theme.spacing(5),
    background:
      "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/static/images/donate-bg.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
  },
  ".title": {
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      width: 8,
      left: -10,
      top: "55%",
      transform: "translateY(-55%)",
      height: 8,
      backgroundColor: theme.palette.primary.main,
      borderRadius: "50%",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },

    "&:after": {
      content: "''",
      position: "absolute",
      width: widthOffset - 8,
      height: 1,
      left: -widthOffset,
      top: "55%",
      transform: "translateY(-55%)",
      background:
        "linear-gradient(270deg, #82C0FF 0%, #FEC6C6 0%, #6BB5FF 100%)",
      borderRadius: "50%",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  },
  "& .about-btn": {
    fontFamily: "'Exo 2'",
  },
}));
export default HeroStyled;

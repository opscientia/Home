import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const DonateStyled = styled(Box)(({ theme, offsetWidth }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  background:
    "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/static/images/donate-bg.png)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: "''",
    position: "absolute",
    height: 300,
    width: 300,
    left: -180,
    bottom: 0,
    filter: "blur(4px)",
    [theme.breakpoints.up("md")]: {
      backgroundImage: "url('/static/images/donate-last-img.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
    display: { md: "block", sm: "none" },
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
      width: offsetWidth - 8,
      height: 1,
      left: -offsetWidth,
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
  "& .slider-container": {
    paddingTop: theme.spacing(8),
    ".slick-list": {
      paddingTop: theme.spacing(6) + "!important",
      "& .slick-slide": {
        transition: theme.transitions.create(["all"], {
          duration: theme.transitions.duration.standard,
        }),

        "&.slick-center": {
          transform: "translateY(-32px)",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 0),
    },
  },
  ".comming-soon": {
    marginTop: theme.spacing(1),
    background: "linear-gradient(90deg, #6BB5FF 0%, #FEC6C6 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  "& .img-container": {
    padding: theme.spacing(3.5),
    borderRadius: theme.spacing(2),
    background: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 310,
    height: 310,
    flex: "0 0 310px",
  },
  button: {
    "& .react-svg": {
      marginRight: theme.spacing(1),
    },
  },
  "& .MuiButton-root:hover": {
    backgroundColor: "#fff",
    borderColor: '#fff'
  },
}));
export default DonateStyled;

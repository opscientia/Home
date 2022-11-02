import { styled } from "@mui/material/styles";
import { Box,BoxProps } from "@mui/material";
interface Props extends BoxProps{
  widthoffset:number
}
const SubscribeStyled = styled(Box)<Props>(({ theme, widthoffset }) => ({
  backgroundImage: "url('/static/images/background-opsci-04 4.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no - repeat",
  backgroundSize: "cover",
  padding: theme.spacing(15, 2),
  ".title-line": {
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
      display: { sm: "none", md: "block" },
      borderRadius: "50%",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    "&:after": {
      content: "''",
      position: "absolute",
      width: widthoffset - 8,
      height: 1,
      left: -widthoffset,
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
  "& .field-wrapper": {
    border: `1px solid ${theme.palette.primary.main}`,
    maxWidth: 454,
    backgroundColor: "#211a38",
    borderRadius: theme.spacing(2),
    display: "flex",
    position: "relative",
    "&::before": {},
    input: {
      fontFamily: "Montserrat",
    },
    "& .emil ::placeholder": {
      color: "white",
      opacity: 1,
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      fontWeight: 600,
      margin: "-1px -1px -1px 0",

      color: theme.palette.grey[900],
      svg: {
        transform: "rotate(-45deg)",
      },
    },
  },

  "& .email": {
    background: "#443b75",
    borderRadius: "10px",
  },
  "& .rectangle": {
    backgroundImage: "url('/static/images/Rangle 107.png')",
    width: "100%",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url('/static/images/Rangle 107.png')",
      backgroundPosition: "center",

      backgroundSize: "cover",
    },

    [theme.breakpoints.down("md")]: {
      backgroundImage: "url('/static/images/2022-09-10.png')",
      backgroundPosition: "center",

      backgroundSize: "cover",
    },

    "& .sbscribe": {
      [theme.breakpoints.down("md")]: {
        backgroundImage: "url('/static/images/53.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no - repeat",
        backgroundSize: "cover",
      },
    },

    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
  },
  "& .sbscribe": {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "& .MuiButton-root:hover": {
    background: "#fff",
    borderColor: '#fff'
  },
  "& .subscribe-btn": {
    fontFamily: "'Exo 2'",
  },
}));
export default SubscribeStyled;

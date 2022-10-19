import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
const HeaderStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  backgroundImage: "none",
  transition: theme.transitions.create("background-color"),
  "&.scrolled": {
    backgroundColor: "#191919",
  },
  "& .MuiTypography-root": {
    fontFamily: "'Exo 2'",
  },
  "& .MuiListItem-padding": {
    padding: 0,
  },
  "& .MuiToolbar-root": {
    minHeight: 76,
    "& .logo": {
      width: "150px",
      height: "47px",
      "& svg": {
        width: "100%",
      },
    },
    "& .humberg": {
      width: "22px",
      "& svg": {
        width: "100%",
      },
    },
    ".MuiFab-root": {
      color: theme.palette.grey[900],
      textTransform: "capitalize",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      fontFamily: "'Exo 2'",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
export default HeaderStyled;

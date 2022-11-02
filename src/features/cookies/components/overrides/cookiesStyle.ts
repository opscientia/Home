import { styled,Theme } from "@mui/material/styles";
import { AppBar,AppBarProps } from "@mui/material";
interface Props extends AppBarProps {
  width?:number
}
const CookiesStyled = styled(AppBar)<Props>(({  theme,width }) => ({
  bottom: 0,
  top: "unset",
  boxShadow: "none",
  backgroundImage: "red",

  "& .toolbar": {
    background: "#191919",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: "56px",
  },

  ".MuiToolbar-root": {
    justifyContent: "center",
    ".privacy-link": {
      textDecoration: "none",
      color: theme.palette.common.white,
      marginLeft: 4,
      fontStyle: "italic",
    },
    "& .color": {
      display: "flex",
      alignItems: "center",
      paddingTop: "20px",
      paddingBottom: "20px",
      height: "62px",
    },
    ".line": {
      position: "relative",
      "&:before": {
        content: "''",
        position: "absolute",
        width: 8,
        left: 8,
        height: 8,
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
      },
      "&:after": {
        content: "''",
        position: "absolute",
        width: width,
        height: 1,
        left: 16,
        top: 3.5,
        background:
          "linear-gradient(270deg, #82C0FF 0%, #FEC6C6 0%, #6BB5FF 100%)",
        borderRadius: "50%",
      },
    },
  },
})); 

export default CookiesStyled;

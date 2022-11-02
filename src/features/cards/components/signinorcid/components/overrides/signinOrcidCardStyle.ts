import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";
const SigninOrcidCardStyled = styled(Card)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  border: "none",
  backgroundColor: theme.palette.grey["A100"],
  maxWidth: 423,
  width: "100%",
  borderRadius: theme.spacing(2),
  "& .MuiCardContent-root": {
    padding: theme.spacing(4),
  },
  ".MuiButton-root": {
    textTransform: "capitalize",
    fontFamily: "'Exo 2'",
    fontWeight: 600,
  },
  "& .MuiButton-startIcon": {
    position: "absolute",
    left: 13,
  },
  ".errorIcon": {
    transform: "rotate(180deg)",
    color: "#0d6efd",
  },
  "& .register": {
    "& a": {
      color: theme.palette.common.white,
      textDecoration: "none",
      fontSize: theme.typography.body2.fontSize,
      fontFamily: "'Exo 2'",
    },
    "& a:last-of-type": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      fontSize: theme.typography.subtitle1.fontSize,
      fontFamily: "'Exo 2'",
    },
  },
}));
export default SigninOrcidCardStyled;

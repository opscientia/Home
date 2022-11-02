import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const JoinStyled = styled(Box)(({ theme }) => ({
  background: "url('static/images/bg-5.png')",
  paddingBottom: theme.spacing(20),
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textAlign: "center",
  "& .MuiBox-root": {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
  },
  "& .MuiButton-root": {
    marginTop: 10,
  },

  "&:hover": {
    cursor: "pointer",
  },
  "& .join-btn": {
    fontFamily: "'Exo 2'",
  },
}));
export default JoinStyled;

import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";
const OpsciStyled = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  background:
    "linear-gradient(328.58deg, rgba(54, 6, 52, 0.8) 5.63%, rgba(0, 0, 0, 0.8) 22.84%, rgba(75, 120, 165, 0.8) 100%)",
  backdropFilter: "blur(20px)",
  height: "504px",
  transition: theme.transitions.create("box-shadow"),
  "&:hover": {
    boxShadow: "inset 0px 4px 8px #FEC6C6",
  },
  "& .ic-container": {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiCardContent-root": {
    padding: theme.spacing(3),
    button: {
      maxWidth: 277,
      width: "100%",
    },
  },
  "& .card-btn": {
    fontFamily: "'Exo 2'",
  },
}));
export default OpsciStyled;

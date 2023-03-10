import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const HeroStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  paddingTop: 70,
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/static/images/hero-bg.png)",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: 642,
  marginBottom: -2,
  [theme.breakpoints.down("md")]: {
    background: "url('static/images/background-opsci-04 1 (1).png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
  },
  "& .hero-img": {
    display: "flex",
    justifyContent: "center",
  },

  "& .logo": {
    
    [theme.breakpoints.down("md")]: {
      width: "167px!important",
      display: "flex",
      justifyContent: "center",
      paddingTop: "30px",
      paddingBottom: "30px", 
     
    },
    
  },
  "& .hero-btn": {
    fontFamily: "'Exo 2'",
  },

}));

export default HeroStyled;

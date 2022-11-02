import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const FooterStyled = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(8),
  backgroundImage: "url('static/images/footer.png')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no - repeat",

  "& .logo-link": {
    display: "inline-flex",
    "& .logo": {
      width: "130px",
      height: "56px",
      "& svg": {
        width: "100%",
      },
    },
  },
  "& .policy-privacy": {
    padding: "0",
    "& .MuiListItem-root": {
      padding: "0",
      "& a": {
        textDecoration: "none",
        position: "relative",
        color: theme.palette.text.secondary,
        fontFamily: "'Exo 2'",
        textAlign: "center",
        "&:not(:last-of-type)": {
          paddingRight: theme.spacing(4),
          "&:before": {
            content: '""',
            display: "inline-block",
            width: "1px",
            height: "12px",
            backgroundColor: theme.palette.text.secondary,
            position: "absolute",
            right: theme.spacing(2),
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          },
          [theme.breakpoints.down("sm")]: {
            paddingRight: theme.spacing(2),
          },
        },
      },
    },
  },
  "& .nav-links": {
    padding: 0,
    "& .MuiListItem-root": {
      paddingLeft: 0,
      paddingRight: 0,
      "& a": {
        color: theme.palette.text.primary,
        fontFamily: "'Montserrat'",
        textDecoration: "none",
        fontWeight: 500,
        textTransform: "uppercase",
      },
    },
  },
  "& .MuiListItem-root": {
    paddingBottom: 0,
    paddingTop: 0,
  },
  "& .footer-btn": {
    fontFamily: "'Exo 2'",
  },
  ".btn-icon": {
    "&:hover": {
      svg: {
        path: {
          fill: theme.palette.primary.main,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5)
    },
    '&:not(:last-of-type)': {
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(1.5)
      },
    }
  },
}));
export default FooterStyled;

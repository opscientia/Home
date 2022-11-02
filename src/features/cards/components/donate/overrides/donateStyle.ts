import { styled, alpha } from "@mui/material/styles";
import { Card } from "@mui/material";
const donateStyled = styled(Card)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: theme.spacing(4),
  boxShadow:
    "inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px rgba(0, 0, 0, 0.25)",
  ".label": {
    color: theme.palette.text.secondary,
    fontFamily: "'Exo 2'",
    fontWeight: 400,
  },

  ".MuiCardContent-root": {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    ".big-label": {
      fontSize: 10,
      fontFamily: "'Exo 2'",
      color: theme.palette.secondary.main,
      ".react-svg": {
        marginRight: theme.spacing(0.4),
      },
    },
    ".join-label": {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      p: {
        fontFamily: "'Exo 2'",
        color: theme.palette.text.secondary,
        "&:first-of-type": {
          marginRight: 6,
          paddingRight: 6,
          position: "relative",
          "&:after": {
            content: "''",
            position: "absolute",
            width: "100%",
            background: "transparent",
            borderRight: "2px solid #fff",
            height: "calc(100% + 16px)",
            right: -3,
            borderRadius: "50%",
            top: -8,
          },
        },
      },
    },
    ".MuiCardMedia-root": {
      boxShadow: "inset 4px 4px 9px rgba(0, 0, 0, 0.25)",
      borderRadius: 12,
    },
    '.color-big-label': {
      span: {
        fontFamily: "'Exo 2'",
        '.react-svg': {
          marginRight: 4,
        },
        '&:first-of-type': {
          position: 'relative',
          zIndex: 1,
          borderRight: "2px solid #fff",
          "&:after": {
            content: "''",
            position: "absolute",
            width: 10,
            background: "transparent",
            borderRight: "2px solid #fff",
            height: "53%",
            right: 0,
            borderRadius: "40%",
            top: -1,
            transform: "rotate(-40deg)",
            transformOrigin: "center"
          },
          "&:before": {
            content: "''",
            position: "absolute",
            width: 10,
            background: "transparent",
            borderRight: "2px solid #fff",
            height: "53%",
            right: 0,
            borderRadius: "40%",
            bottom: 0,
            transform: "rotate(40deg)",
            transformOrigin: "center"
          },
        },
        '&:last-of-type': {
          position: 'relative',
          zIndex: 0,
          left: -16,
          paddingLeft: 22
        }
      }
    }
  },
}));
export default donateStyled;

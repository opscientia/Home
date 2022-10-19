import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const HeroStyled = styled(Box)(({ theme, styleprops }) => ({
    minHeight: 592,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "& .title": {
        position: 'relative',
        '&:before': {
            content: '""',
            pointerEvents: "none",
            position: 'absolute',
            left: -27,
            width: 8,
            height: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '50%',
            background: theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        '&:after': {
            content: '""',
            pointerEvents: "none",
            position: 'absolute',
            left: -styleprops,
            width: styleprops - 27,
            height: 1,
            top: '50%',
            transform: 'translateY(-50%)',
            background: theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    }

}));
export default HeroStyled;
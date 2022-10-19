import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const HeroStyled = styled(Box)(({ theme, styleprops }) => {
    const { right, left } = styleprops;
    console.log(right, left);
    return {
        background: "linear-gradient(180deg, #1C252C 0%, rgba(72, 96, 115, 0.7) 100%)",
        paddingTop: theme.spacing(13.1),
        overflow: 'hidden',
        '& .ic-container': {
            width: 200,
            height: 200,
            flex: '0 0 auto',
            borderRadius: theme.spacing(2),
            backgroundColor: theme.palette.primary.light,
            padding: theme.spacing(2),
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        },
        '& .title-right': {
            position: 'relative',
            alignSelf: 'flex-start',
            '&:before': {
                content: '""',
                pointerEvents: "none",
                position: 'absolute',
                right: -27,
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
                right: -right,
                width: right - 27,
                height: 1,
                top: '50%',
                transform: 'translateY(-50%)',
                background: theme.palette.primary.main,
                [theme.breakpoints.down('sm')]: {
                    display: 'none'
                }
            }
        },
        '& .title-left': {
            position: 'relative',
            alignSelf: 'flex-end',
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
                left: -left - 50,
                width: left + 27,
                height: 1,
                top: '50%',
                transform: 'translateY(-50%)',
                background: theme.palette.primary.main,
                [theme.breakpoints.down('sm')]: {
                    display: 'none'
                }
            }
        }

    }
});
export default HeroStyled;
import { List } from "@mui/material";
import { styled } from '@mui/material/styles'
const MenuStyled = styled(List)(({ theme }) => ({
    display: "flex",
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
        flexDirection: 'column'
    },
    '.menu-list': {
        [theme.breakpoints.down("md")]: {
            position: 'static'
        },
    },
    ".MuiCollapse-root": {
        position: 'absolute',
        zIndex: 9999,
        background: theme.palette.background.default,
        top: 70,
        borderRadius: 6,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25))',
        [theme.breakpoints.down("md")]: {
            top: 8,
            right: 16,
            background: "#303030"
        },
        ".MuiListItemIcon-root": {
            minWidth: 0,
            svg: {
                marginTop: 4,
                width: 22,
                height: 22,
            }
        },
        ".MuiListItemButton-root": {
            borderRadius: 6,
            "&:hover": {
                background: theme.palette.grey[600],
                svg: {
                    path: {
                        fill: theme.palette.primary.main
                    }
                }
            }
        }
    }
}));
export default MenuStyled
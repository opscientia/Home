import { alpha, experimentalStyled as styled, Theme, PaletteColor } from "@mui/material/styles";

interface Props {
    color: string;
    variant: string;
    theme?: Theme;
}

const RootStyled = styled("span")(({ theme, ...styleprops }: Props) => {
    const isLight = theme?.palette.mode === "light";
    const { color, variant } = styleprops;

    const styleFilled = (color: string) => ({
        color: (theme?.palette[color as keyof typeof theme.palette] as PaletteColor).contrastText,
        backgroundColor: (theme?.palette[color as keyof typeof theme.palette] as PaletteColor).main,
    });

    const styleOutlined = (color: string) => ({
        color: (theme?.palette[color as keyof typeof theme.palette] as PaletteColor).main,
        backgroundColor: "transparent",
        border: `1px solid ${(theme?.palette[color as keyof typeof theme.palette] as PaletteColor).main}`,
    });

    const styleGhost = (color: string) => ({
        color: (theme?.palette[color as keyof typeof theme.palette] as PaletteColor)[isLight ? "dark" : "light"],
        backgroundColor: alpha((theme?.palette[color as keyof typeof theme.palette] as PaletteColor).main, 0.16),
    });

    return {
        height: 23,
        minWidth: 22,
        lineHeight: 1,
        borderRadius: theme?.typography.pxToRem(30),
        cursor: "default",
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        padding: theme?.spacing(0, 1),
        color: theme?.palette.grey[800],
        fontSize: theme?.typography.pxToRem(11),
        fontFamily: "Poppins",
        backgroundColor: theme?.palette.grey[300],
        ...(color !== "default"
            ? {
                ...(variant === "filled" && { ...styleFilled(color) }),
                ...(variant === "outlined" && { ...styleOutlined(color) }),
                ...(variant === "ghost" && { ...styleGhost(color) }),
            }
            : {
                ...(variant === "outlined" && {
                    backgroundColor: "transparent",
                    color: theme?.palette.text.primary,
                    border: `1px solid ${theme?.palette.grey["500_32"]}`,
                }),
                ...(variant === "ghost" && {
                    color: isLight
                        ? theme.palette.text.secondary
                        : theme?.palette.common.white,
                    backgroundColor: theme?.palette.grey["500_16"],
                }),
            }),
    };
});

export default RootStyled;

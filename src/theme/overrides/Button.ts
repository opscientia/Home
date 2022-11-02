// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: 500,
          backgroundColor: "transparent",
          borderRadius: theme.spacing(2),
          minHeight: theme.spacing(6),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      },
      // variants for buttons
      variants: [
        {
          props: { color: "primary" },
          style: {
            border: `1.5px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.black,
            },
          },
        },
        {
          props: { color: "success", variant: "contained" },
          style: {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.common.black,
            "&:hover": {
              backgroundColor: theme.palette.success.main,
              color: theme.palette.common.black,
            },
          },
        },
        {
          props: { color: "primary", variant: "contained" },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.black,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.black,
            },
          },
        },
        {
          props: { variant: "holo" },
          style: {
            backgroundColor: "#5E72EB",
            color: "#fff",
            borderColor: "#5E72EB",
            "&:hover": {
              backgroundColor: "#5E72EB",
              color: "#fff",
            },
          },
        },
      ],
    },
  };
}

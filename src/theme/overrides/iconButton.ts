import { alpha } from "@mui/material/styles";
// ----------------------------------------------------------------------
export default function IconButton(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.MuiIconButton-sizeLarge": {
            minHeight: "48px",
            minWidth: "48px",
          },
          "&.MuiIconButton-sizeMedium": {
            minHeight: "40px",
            minWidth: "40px",
          },
          "&.MuiIconButton-sizeSmall": {
            maxHeight: "24px",
            maxWidth: "24px",
          },

        },
      }
    }
  };
}

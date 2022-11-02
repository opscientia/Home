import PropTypes from "prop-types";
import { useMemo } from "react";
// material
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows from "./shadows";
// ----------------------------------------------------------------------
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    holo: true;
  }
}
ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: { ...palette.dark, mode: "dark" },
      shape,
      typography,
      breakpoints,
      direction: "ltr",
      shadows: shadows.dark,
    }),
    []
  );

  const theme = createTheme(themeOptions as any);
  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

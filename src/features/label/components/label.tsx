// material
import RootStyled from "./overrides/labelStyled";
import React from "react";
import { SxProps, Theme } from "@mui/material";

type LabelProps = {
  children: React.ReactNode;
  color?: string;
  variant?: string;
  sx?: SxProps<Theme>;
  className?: string;
};

function Label({
  color = "default",
  variant = "ghost",
  children,
  ...other
}: LabelProps) {
  return (
    <RootStyled color={color} variant={variant} {...other}>
      {children}
    </RootStyled>
  );
}
export default Label;

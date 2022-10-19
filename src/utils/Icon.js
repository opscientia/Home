import React from "react";
import { ReactSVG } from "react-svg";

export default function IconUrl({ path, className, ...props }) {
  const prefix = "/static/icons/";
  return (
    <ReactSVG
      className={`react-svg ${className ? className : ""}`}
      src={`${prefix}${path}.svg`}
    />
  );
}

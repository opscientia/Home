import React from "react";
import { ReactSVG } from "react-svg";

export default function IconUrl({ ...props }) {
  const { path, className,navigatePath } = props;
  const prefix = "/static/icons/";
  return (
    <ReactSVG
      className={`react-svg ${className ? className : ""}`}
      src={`${prefix}${path}.svg`}
      props
      // onClick={()=>window.location.href=navigatePath}
      style={{cursor: "pointer"}}
    />
  );
}

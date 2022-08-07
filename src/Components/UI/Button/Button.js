import React from "react";
import ButtonCSS from "./Button.module.css";
function Button(props) {
  const styled = ButtonCSS;
  return (
    <button
      status={props.status}
      className={`${props.className} ${styled[`${props.type}`]} 
      ${styled[`${props.status}`]}`}
    >
      {props.children}
    </button>
  );
}

export default Button;

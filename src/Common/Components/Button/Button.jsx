import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <div
      className={`cmpns cmpns-button ${props.className ? props.className : ""}`}
    >
      {props.text ? props.text : props.children}
    </div>
  );
}

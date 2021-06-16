import React from "react";
import "./button.css";

const Button = (props) => {
  return <button className="btn-green">{props.title}</button>;
};

export default Button;

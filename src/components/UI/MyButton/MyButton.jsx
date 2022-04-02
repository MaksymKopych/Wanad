import React from "react";
import classes from "./MyButton.module.css";
export const MyButton = ({ children, ...props }) => {
  return (
    <button className={classes.myButton} {...props}>
      {children}
    </button>
  );
};

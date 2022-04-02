import React from "react";
import classes from "./MyLogo.module.css";
export const MyLogo = (props) => {
  return (
    <div className={classes.myLogo}>
      <img style={{ ...props }} src="image/logo-icon.ico" alt="logo" />
    </div>
  );
};

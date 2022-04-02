import { Grid } from "@mui/material";
import React from "react";

export const Loader = () => {
  return (
    <Grid
      container
      style={{ height: window.innerHeight - 50 }}
      alignItems="center"
      justifyContent="center"
    >
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Grid>
  );
};

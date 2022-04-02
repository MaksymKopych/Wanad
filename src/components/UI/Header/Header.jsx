import { AppBar, Grid, Toolbar } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Context } from "../../../App";

import { LOGIN_ROUTE } from "../../../utils/consts";
import { MyButton } from "../MyButton/MyButton";
import { MyLogo } from "../MyLogo/MyLogo";

export const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white",
        flexDirection: "row",
      }}
    >
      <Toolbar
        style={{
          width: "250px",
          borderRight: "3px solid rgba(89, 89, 89, 0.371)",
        }}
      >
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <MyLogo width="60px" />
        </Grid>
      </Toolbar>
      <Toolbar
        style={{
          flexGrow: 1,
        }}
      >
        <Grid container justifyContent={"flex-end"} alignItems={"center"}>
          {user ? (
            <MyButton onClick={() => signOut(auth)}>LogOut</MyButton>
          ) : (
            <MyButton>
              {" "}
              <Link style={{ color: "white" }} to={`${LOGIN_ROUTE}`}>
                Login
              </Link>
            </MyButton>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Context } from "../App";
import { MyButton } from "./UI/MyButton/MyButton";

export const LoginScreen = () => {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log(user.auth._isInitialized);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="loginScreen">
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
        direction={"column"}
      >
        <Grid>
          <Box p={10}>
            <MyButton
              onClick={login}
              variant="outlined"
              style={{
                color: "white",
                backgroundColor: "#0358ffe6",
              }}
            >
              Login with GOOGLE
            </MyButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

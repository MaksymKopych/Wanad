import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
import { collection, getDocs } from "firebase/firestore/lite";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Loader } from "./components/Loader";
import { Header } from "./components/UI/Header/Header";
import db from "./firebase";

export async function getUsers(db) {
  const usersCol = collection(db, "users");
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());

  return userList;
}

const auth = getAuth();
export const Context = createContext();
export const App = () => {
  const [data, setData] = useState();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Context.Provider value={{ auth, data, setData }}>
        <Header />
        <AppRouter />
      </Context.Provider>
    </BrowserRouter>
  );
};

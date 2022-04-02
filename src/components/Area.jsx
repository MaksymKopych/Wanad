import { doc, updateDoc } from "firebase/firestore/lite";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../App";
import db from "../firebase";
import { MyButton } from "./UI/MyButton/MyButton";
import { MyInput } from "./UI/MyInput/MyInput";

export const Area = () => {
  const { auth, data } = useContext(Context);
  const [user] = useAuthState(auth);
  const [areaName, setAreaName] = useState("");
  const [price, setPrice] = useState("");
  const uid = user.uid;

  const postMethod = async (e) => {
    e.preventDefault();
    const area = doc(db, "users", `${uid}`);
    await updateDoc(area, {
      "area.name": areaName,
      "area.allPapers": 0,
      peiceForOne: price,
    });
    setAreaName("");
    setPrice("");
  };
  return (
    <form className="newWork-form content" onSubmit={postMethod}>
      <h1 style={{ textAlign: "center", margin: "20px", fontSize: "2rem" }}>
        Nowa Robota
      </h1>
      <div className="newWork-inputs">
        <label
          style={{ position: "absolute", left: "-99999px" }}
          htmlFor="area"
        >
          Wpish miejscowość
        </label>
        <MyInput
          value={areaName}
          style={{ width: "100%" }}
          placeholder="Zoliborz"
          name="area"
          type="text"
          onChange={(e) => {
            setAreaName(e.target.value);
          }}
        />
        <label
          style={{ position: "absolute", left: "-99999px" }}
          htmlFor="prise"
        >
          Cena za sztukę
        </label>
        <MyInput
          value={price}
          style={{ width: "100%" }}
          placeholder="PLN/SZT"
          name="prise"
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <MyButton>Dodaj</MyButton>
      </div>
    </form>
  );
};

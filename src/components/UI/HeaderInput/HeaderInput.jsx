import { doc, updateDoc } from "firebase/firestore/lite";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../../App.js";
import db from "../../../firebase.js";
import { MyButton } from "../MyButton/MyButton.jsx";
import { MyInput } from "../MyInput/MyInput.jsx";
export const HeaderInput = (props) => {
  const [count, setCount] = useState("");
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const postMethod = async (allPapers) => {
    const area = doc(db, "users", `${user.uid}`);
    await updateDoc(area, {
      "area.allPapers": allPapers,
    });

    setCount("");
  };
  return (
    <form
      className="header-input"
      onSubmit={(e) => {
        e.preventDefault();
        postMethod(props.allPapers);
      }}
    >
      <div className="main-input">
        <label style={{ marginLeft: "5px" }} htmlFor="addTotal">
          Enter the amount of work
        </label>
        <MyInput
          placeholder="Podaj ilosc"
          name="addTotal"
          type="number"
          min="1"
          apperanse="none"
          style={{ width: "100%" }}
          onChange={(e) => setCount(e.target.value)}
          value={count}
        />
      </div>
      <MyButton
        onClick={() => {
          props.addPapers(count);
        }}
      >
        Add
      </MyButton>
    </form>
  );
};

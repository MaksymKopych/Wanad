import { doc, updateDoc } from "firebase/firestore/lite";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../App";
import db from "../firebase";
import { MyButton } from "./UI/MyButton/MyButton";
import { MyInput } from "./UI/MyInput/MyInput";
export const MySection = (props) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const [donePapers, setDonePapers] = useState("");
  const [removePapers, setRemovePapers] = useState("");
  const [date, setDate] = useState("");

  const postDay = async (e) => {
    e.preventDefault();
    const area = doc(db, "users", `${user.uid}`);
    await updateDoc(area, {
      "area.allPapers": props.allPapers,
    });
    setDonePapers("");
    setRemovePapers("");
  };

  return (
    <section className="section">
      <form className="sectionForm" onSubmit={postDay}>
        <div className="form-input">
          <label style={{ marginLeft: "5px" }} htmlFor="date">
            Date
          </label>
          <MyInput
            name="date"
            type="date"
            apperanse="none"
            style={{ width: "100%" }}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />
        </div>
        <div className="form-input">
          <label style={{ marginLeft: "5px" }} htmlFor="numberTooday">
            I did today
          </label>
          <MyInput
            placeholder="szt"
            name="numberTooday"
            type="number"
            apperanse="none"
            style={{ width: "100%" }}
            onChange={(e) => {
              setDonePapers(e.target.value);
            }}
            value={donePapers}
          />
        </div>
        <div className="form-input">
          <label style={{ marginLeft: "5px" }} htmlFor="returnQuantity">
            Remove
          </label>
          <MyInput
            placeholder="szt"
            name="returnQuantity"
            type="number"
            apperanse="none"
            style={{ width: "100%" }}
            onChange={(e) => {
              setRemovePapers(e.target.value);
            }}
            value={removePapers}
          />
        </div>
        <MyButton
          onClick={() => {
            props.addDonePapers(donePapers, removePapers);
          }}
        >
          Add
        </MyButton>
      </form>
    </section>
  );
};

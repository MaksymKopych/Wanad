import { getDatabase, ref, set } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context, getUsers } from "../App";
import { HeaderInput } from "./UI/HeaderInput/HeaderInput";
import { MySection } from "./MySection";
import { Loader } from "./Loader";
import db from "../firebase";
import { doc } from "firebase/firestore/lite";
export const AddDay = () => {
  const { auth, data, setData } = useContext(Context);
  const [user] = useAuthState(auth);
  const month = new Date().toLocaleDateString().substr(3, 7);
  const [allPapers, setAllPapers] = useState(data.area.allPapers);
  const [thisMonth, setThisMonth] = useState(month);
  const [inAMonthe, setInAMonthe] = useState(thisMonth.allPerMonth);
  const [salary, setSalary] = useState(thisMonth.salary);

  const addPapers = (papers) => {
    setAllPapers((prev) => Number(prev) + Number(papers));
  };

  const addDonePapers = async (done, remove) => {
    setAllPapers((prev) => Number(prev) - Number(done) - Number(remove));
    setInAMonthe((prev) => Number(prev) + Number(done));
    setSalary(Number(inAMonthe) * Number(data.peiceForOne));
  };
  useEffect(() => {
    const promise = Promise.resolve(getUsers(db));
    promise.then(function (v) {
      v.map((el) => {
        if (el.id === user.uid) {
          setData(el);
          el.months.map((_month) => {
            if (_month.name === month) {
              setThisMonth(_month);
              setInAMonthe(_month.allPerMonth);
              setSalary(_month.salary);
            }
          });
        }
      });
    });
    console.log(data.peiceForOne);
  }, []);

  return (
    <>
      {data ? (
        <div className="content main-form">
          <header className="contener-header">
            <h1
              style={{
                padingTop: "20px",
                fontSize: "2rem",
                position: "relative",
                left: "40px",
                top: "20px",
              }}
            >
              {data.area.name}
            </h1>
            <HeaderInput addPapers={addPapers} allPapers={allPapers} />
          </header>
          <MySection
            addDonePapers={addDonePapers}
            inAMonthe={inAMonthe}
            salary={salary}
            allPapers={allPapers}
          />
          <div className="section-content">
            <p className="content-text"> There is work left: {allPapers} szt</p>
            <p className="content-text"> You did this month: {inAMonthe} szt</p>
            <p className="content-text"> Salary : {salary} PLN</p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

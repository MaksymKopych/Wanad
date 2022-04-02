import React from "react";
export const Calendar = () => {
  const date = new Date();
  return (
    <>
      <header>
        <p
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "#4070eb",
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          In process
        </p>
      </header>
    </>
  );
};

import React, { useContext } from "react";
import { MainContext } from "../context/context";

const Header = () => {
  const {name, surname, ab, setAb} = useContext(MainContext);

  const Change = () => {
    
    setAb(ab === "Sara" ? "Sitare" : "Sara")
  }

  return (
    <div style={{ height: 300, backgroundColor: "orange" }}>
      <p>{name}</p>
      <p>{surname}</p>
      <hr/>
      <h1>{ab}</h1>
      <button onClick={Change}>
        Change
      </button>
    </div>
  );
};

export default Header;

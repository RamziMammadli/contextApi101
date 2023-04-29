import React, { useContext, useState } from "react";
import { MainContext } from "../context/context";

const Header = () => {
  const {name, surname, ab, setAb} = useContext(MainContext);
  const [ bgcolor , setColor ] = useState("orange")

  const Change = () => {

    setAb(ab === "Sara" ? "Sitare" : "Sara") // ternary operator
  }

  const SwitchBG = () => {
    setColor(bgcolor === "orange" ? "yellow" : "orange")
  }

  return (
    <div style={{ height: 300, backgroundColor: bgcolor }}>
      <p>{name}</p>
      <p>{surname}</p>
      <hr/>
      <h1>{ab}</h1>
      <button onClick={Change}>
        Change
      </button>
      <button onClick={SwitchBG}>
        Switch Background
      </button>
    </div>
  );
};

export default Header;

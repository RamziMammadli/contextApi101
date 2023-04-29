import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Middle from "./components/Middle";
import { MainContext } from "./context/context";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("Ramzi");
  const [surname, setSurname] = useState("Mammadli");
  const [db, setDb] = useState([]);
  const [ab, setAb] = useState("Sitare");

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/suppliers/")
      .then((response) => {
        setDb(response.data);
      });
  }, []);

  const data = {
    name,
    surname,
    db,
    ab,
    setAb
  };

  return (
    <div>
      <MainContext.Provider value={data}>
        <Header />
        <Middle />
      </MainContext.Provider>
    </div>
  );
};

export default App;

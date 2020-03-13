import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Warning from "./components/Information/Information";
import Button from "./components/Button/Button";
import Weight from "./components/Weight/Weight";
import Card from "./components/Cards/Card";
import Kg_Ibs from "./components/Kg_Ibs/Kg_Ibs";

function App() {
  const [finalweight, setFinalweight] = useState(null);
  const addWeight = finalweight => {
    setFinalweight(finalweight);
  };

  return (
    <div className="App">
      <Header />
      <Warning />
      <Button />
      <Weight get={addWeight} />
      <Kg_Ibs />
      <Card weight={finalweight} />
    </div>
  );
}
export default App;

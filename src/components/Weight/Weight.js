import React, { useState, useEffect } from "react";
import style from "./Weight.module.css";
import AlertBox from "../AlertBox/AlertBox";

const Weight = ({ get }) => {

  let [visible, setVisibility] = useState(false);
  let [weight, setWeight] = useState(1);
  useEffect(get.bind(null, weight));


  useEffect(() => {
    if (weight < 0) {
      setWeight(1);
      setVisibility(true)
    }
  }, [weight]);

  const checkWeight = (weight) => {
    if (weight > 0) {
      setVisibility(false)
    }
  }

  const chandleChangeInput = e => {
    e.target.value <= 0 ? setWeight("") : setWeight(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <h3>Waga dziecka : </h3>
      <div className={style.buttons}>
        <button
          className={style.buttonB}
          onClick={() => setWeight(Number(weight) - 5)}
        >
          -5kg
        </button>
        <button
          className={style.buttonA}
          onClick={() => setWeight(Number(weight) - 1)}
        >
          -1kg
        </button>
        <input
          placeholder="Kg"
          value={weight}
          onChange={chandleChangeInput}
          type="number"
        ></input>
        <button
          className={style.buttonA}
          onClick={() => { setWeight(Number(weight) + 1); checkWeight(weight) }}
        >
          +1kg
        </button>
        <button
          className={style.buttonB}
          onClick={() => { setWeight(Number(weight) + 5); checkWeight(weight) }}
        >
          +5kg
        </button>
      </div>
      {visible ? <AlertBox /> : ''}
    </div>
  );
};

export default Weight;

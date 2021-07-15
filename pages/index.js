import styles from "../styles/Home.module.css";
import React, { useState, Component } from "react";

export default function Form() {
  const aimag = {
    songolt1: <option value="songolt1">Булган</option>,
    songolt2: <option value="songolt2">Архангай</option>,
  };
  const sum1 = {
    songolt1: <option value="sum2">Айраг-сум</option>,
    songolt2: <option value="sum1">Хашаат-сум</option>,
  };
  const sum2 = {
    songolt1: <option value="sum3">Тариат-сум</option>,
    songolt2: <option value="sum4">Чулуут-сум</option>,
  };

  const bag1 = {
    songolt1: <option value="songolt2">1-р баг</option>,
    songolt2: <option value="songolt1">5-р баг</option>,
    songolt3: <option value="songolt1">6-р баг</option>,
  };

  const bag2 = {
    songolt1: <option value="songolt2">2-р баг</option>,
    songolt2: <option value="songolt1">4-р баг</option>,
    songolt3: <option value="songolt1">12-р баг</option>,
  };

  const bag3 = {
    songolt1: <option value="songolt2">4-р баг</option>,
    songolt2: <option value="songolt1">8-р баг</option>,
    songolt3: <option value="songolt1">9-р баг</option>,
  };

  const bag4 = {
    songolt1: <option value="songolt2">11-р баг</option>,
    songolt2: <option value="songolt1">13-р баг</option>,
    songolt3: <option value="songolt1">15-р баг</option>,
  };

  const [AimagDuureg, setAimagDuureg] = useState(Object.values(aimag));
  const [Sum, setSum] = useState();
  const [value, setValue] = useState();
  const [SumValue, setSumValue] = useState();
  const [Bag, setBag] = useState();

  function handleChange(e) {
    setValue(e.target.value);
    setSum(Object.values(value == "songolt1" ? sum1 : sum2));
    console.log(value);
  }

  function handleChange2(e) {
    let bagg = bag1;
    setSumValue(e.target.value);
    handleBag(SumValue);
    setBag(Object.values(bagg));
    console.log(SumValue);

    function handleBag(SumValue) {
      switch (SumValue) {
        case "sum1":
          return (bagg = bag1);
          break;
        case "sum2":
          return (bagg = bag2);
          break;
        case "sum3":
          return (bagg = bag3);
          break;
        case "sum4":
          return (bagg = bag4);
          break;
        default:
          return null;
      }
    }
  }

  return (
    <form>
      <label htmlFor="name">Аймаг/Хот</label>
      <select defaultValue={value} onChange={handleChange}>
        {AimagDuureg}
      </select>
      <label htmlFor="name">Сум/Дүүрэг</label>
      <select onChange={handleChange2}>{Sum}</select>
      <label htmlFor="name">Баг/Хороо</label>
      <select>{Bag}</select>
      <button type="submit">Submit</button>
    </form>
  );
}

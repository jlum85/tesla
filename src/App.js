import React, { useState } from "react";

import "./App.css";

import SelectOption from "./SelectOption";
import SumOptions from "./SumOptions";

function App() {
  const [vehicule1, setOpt1] = useState(90700);
  const [vehicule2, setOpt2] = useState(0);
  const [color1, setOpt3] = useState(0);
  const [color2, setOpt4] = useState(0);
  const [Opt1, setSelectOpt1] = useState(0);
  const [Opt2, setSelectOpt2] = useState(0);

  // console.log(vehicule1, vehicule2, Opt1, color1, color2, Opt2);

  const Opt = [
    {
      key: 1,
      lib: "votre véhicule",
      options: [
        { name: "Grande autonomie", price: 90700 },
        { name: "Performance", price: 106700 }
      ]
    },
    {
      key: 2,
      lib: "la couleur",
      options: [
        { name: "Blanc nacré", price: 0 },
        { name: "Noir uni", price: 1000 }
      ]
    }
  ];

  let sumAll = vehicule1 + vehicule2 + color1 + color2;

  return (
    <div className="App">
      <h1>Tesla Config</h1>
      <SelectOption
        cat={Opt[0]}
        onSelect1={() => {
          setOpt1(90700);
          setOpt2(0);
          setSelectOpt1(0);
        }}
        onSelect2={() => {
          console.log("select2");
          setOpt1(0);
          setOpt2(106700);
          setSelectOpt1(1);
        }}
        active={Opt1}
      />
      <SelectOption
        cat={Opt[1]}
        onSelect1={() => {
          setOpt3(0);
          setOpt4(0);
          setSelectOpt2(0);
        }}
        onSelect2={() => {
          setOpt3(0);
          setOpt4(1000);
          setSelectOpt2(1);
        }}
        active={Opt2}
      />
      <SumOptions sumAll={sumAll} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";

import SelectOption from "./SelectOption";
import SumOptions from "./SumOptions";

function App() {
  // si true 1er choix de l'option Véhicule (grande autonomie) actif sinon c'est le 2ème choix (performance)
  const [Opt1, setSelectOpt1] = useState(true); // par défaut "Grande autonomie"
  const [Opt2, setSelectOpt2] = useState(true); // par défaut "Blanc nacré"

  const Opt = [
    {
      lib: "votre véhicule",
      options: [
        { name: "Grande autonomie", price: 90700 },
        { name: "Performance", price: 106700 }
      ]
    },
    {
      lib: "la couleur",
      options: [
        { name: "Blanc nacré", price: 0 },
        { name: "Noir uni", price: 1000 }
      ]
    }
  ];

  const sumAll = (Opt1 ? 90700 : 106700) + (Opt2 ? 0 : 1000);

  return (
    <div className="App">
      <h1>Tesla Config</h1>
      <SelectOption
        cat={Opt[0]}
        onSelect1={() => {
          setSelectOpt1(true);
        }}
        onSelect2={() => {
          setSelectOpt1(false);
        }}
        active={Opt1}
      />
      <SelectOption
        cat={Opt[1]}
        onSelect1={() => {
          setSelectOpt2(true);
        }}
        onSelect2={() => {
          setSelectOpt2(false);
        }}
        active={Opt2}
      />
      <SumOptions sumAll={sumAll} />
    </div>
  );
}

export default App;

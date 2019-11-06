import React from "react";

import Option from "./Option";

const SelectOption = props => {
  const lib = props.cat.lib;
  const [opt1, opt2] = props.cat.options;

  return (
    <div className="catOption">
      <h2> Sélectionnez {lib}</h2>
      <Option
        name={opt1.name}
        price={opt1.price}
        onClickOpt={props.onSelect1}
        active={props.active}
      />
      <Option
        name={opt2.name}
        price={opt2.price}
        onClickOpt={props.onSelect2}
        active={!props.active}
      />
    </div>
  );
};

export default SelectOption;

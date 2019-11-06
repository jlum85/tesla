import React from "react";

const SumOptions = props => {
  return (
    <div className="total">
      <h1>Total : {new Intl.NumberFormat().format(props.sumAll)} $ </h1>
      <button className="btnBuy" type="button">
        Buy !
      </button>
    </div>
  );
};

export default SumOptions;

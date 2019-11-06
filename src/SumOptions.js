import React from "react";

const SumOptions = props => {
  return (
    <>
      <h1>Total : {props.sumAll} $ </h1>
      <button className="btnBuy" type="button">
        Buy !
      </button>
    </>
  );
};

export default SumOptions;

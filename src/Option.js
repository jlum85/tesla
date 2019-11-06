import React from "react";

const Option = props => {
  const active = props.active;
  const fw = active ? "normal" : "bold";
  const colorb = active ? "black" : "blue";

  return (
    <>
      <button
        style={{ fontWeight: fw, color: colorb }}
        onClick={props.onClickOpt}
        className="option"
      >
        {props.name} - {props.price} $
      </button>
    </>
  );
};

export default Option;

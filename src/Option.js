import React from "react";

const Option = props => {
  // console.log(props);
  const { active } = props; // const active = props.active

  return (
    <div
      style={{
        fontWeight: active ? "bold" : "normal",
        color: active ? "blue" : "grey"
      }}
      onClick={props.onClickOpt}
      className="option"
    >
      {props.name} - {new Intl.NumberFormat().format(props.price)} $
    </div>
  );
};

export default Option;

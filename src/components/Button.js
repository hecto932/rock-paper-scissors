import React from "react";

import "./styles/Button.scss";

const Button = props => {
  const { type, onHandleClick } = props;

  return (
    <button onClick={(e) => { onHandleClick(type.charAt(0)) }} className={`btn btn-${type}`}>
      <img width="100%" src={`/assets/images/${type}.png`} />
    </button>
  );
};

export default Button;

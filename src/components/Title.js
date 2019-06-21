import React from "react";

import "./styles/Title.scss";

const Title = () => (
  <div className="title-container">
    <h1 className="title">
      <span className="rock-text">Rock</span>,
      <span className="paper-text"> Paper</span> &
      <span className="scissors-text"> Scissors</span>
    </h1>
    <div className="home-line" />
  </div>
);

export default Title;

import React from "react";

import './styles/Results.scss'

const Results = props => {
  const { me, cpu } = props;
  return (
    <div className="results">
      <h2 className="results-name">
        <span>Me</span>
        <span> - </span>
        <span>CPU</span>
      </h2>
      <h2 className="results-score">
        <span>{me}</span>
        <span> - </span>
        <span>{cpu}</span>
      </h2>
    </div>
  );
};

export default Results;

import React from "react";

import "./styles/Button.scss";

import PaperImg from '../../assets/images/paper.png'
import RockImg from '../../assets/images/rock.png'
import ScissorsImg from '../../assets/images/scissors.png'

const images = {
  rock: RockImg,
  scissors: ScissorsImg,
  paper: PaperImg
}

const Button = props => {
  const { type, onHandleClick } = props;

  return (
    <button onClick={(e) => { onHandleClick(type.charAt(0)) }} className={`btn btn-${type}`}>
      <img width="100%" src={images[type]} />
    </button>
  );
};

export default Button;

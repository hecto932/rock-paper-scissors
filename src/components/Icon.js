import React from 'react'

import './styles/Icon.scss'

import MiniRockImg from '../../assets/images/mini-r.png'
import MiniPaperImg from '../../assets/images/mini-p.png'
import MiniScissorsImg from '../../assets/images/mini-s.png'

const images = {
  r: MiniRockImg,
  s: MiniPaperImg,
  p: MiniScissorsImg
}

const Icon = props => {
  const { type } = props
  return (
    <div className="icon">
      <img width="100%" src={images[type]} />
    </div>
  )
}

export default Icon
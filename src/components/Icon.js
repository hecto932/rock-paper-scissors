import React from 'react'

import './styles/Icon.scss'

const Icon = props => {
  const { type } = props
  return (
    <div className="icon">
      <img width="100%" src={`/assets/images/mini-${type}.png`} />
    </div>
  )
}

export default Icon
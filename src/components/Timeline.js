import React from 'react'

import './styles/Timeline.scss'

import Icon from './Icon'

const Timeline = props => {
  const { rounds } = props
  return (
    <div className="timeline">
      {rounds.map((p, i) => {
        return (
          <div key={i} className="play">
            <Icon type={`${p.me}`} />
            <span className="division" />
            <Icon type={p.cpu} />
          </div>
        )
      })}
    </div>
  )
}

export default Timeline
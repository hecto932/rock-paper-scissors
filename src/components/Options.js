import React from 'react'

import './styles/Options.scss'

import Button from './Button'
import Loader from './Loader'

const Options = props => {
  const { onHandleClick, isLoading } = props

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="options">
      <Button onHandleClick={onHandleClick} type="rock" />
      <Button onHandleClick={onHandleClick} type="paper" />
      <Button onHandleClick={onHandleClick} type="scissors" />
    </div>
  )
}

export default Options
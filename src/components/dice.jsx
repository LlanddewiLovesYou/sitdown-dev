import React from 'react'

import './dice.css'

export function Dice(props) {
  return(
    <div className='dice-wrapper'>
      <div className="dice-number">{props.diceRoll}</div>
      <img src="https://i.pinimg.com/originals/f2/2a/65/f22a65580dad3290bf6bd64ba409e730.jpg" className='dice-image'/>
    </div>
  )
}
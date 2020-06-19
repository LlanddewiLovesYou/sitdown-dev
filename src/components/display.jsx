import React from 'react'
import './display.css'

export function Display(props) {
  const { sitDown } = props
  return (
    <div className='display-wrapper'>
      <p className='display-preface'>Today's SitDown is...</p>
      <div className='display-title'>{`${sitDown.title}`}</div>
      <p className='display-summary'>{`${sitDown.summary}`}</p>
    </div>
  )
}
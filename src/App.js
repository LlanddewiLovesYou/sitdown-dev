import React, { Component } from 'react'

import './app.css'
import { Header } from 'components/header.jsx'
import { Dice } from 'components/dice.jsx'
import { Display } from 'components/display.jsx'

import { fetchSitDown } from 'util/roll.js'

export function App(props)  {
  const sitDown = fetchSitDown()
  // const sitDown = {id: 3, title: "HeadButt the Screen", summary: "do the thing"}
  const diceRoll = sitDown.id

  return (
    <div className="App">
      <Header></Header>
      <Dice diceRoll={diceRoll}></Dice>
      <Display sitDown={sitDown}></Display>
    </div>
  )
}

export default App

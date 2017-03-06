import React from 'react'

import { addPlayer, editInput } from "../actions/actionCreators"

const test = (players) => {
  if (players) {
    return players.map( (player) => (<div>Test</div>) )
  }
}

const Players = (props) => {
  return (
    <div>
      <h1>Players</h1>
      {/* <div>{ test(props.state) }</div> */}
      <div>
        <input id="input-name"
               onChange={ (event) => {
                 props.dispatch(editInput(["ui", "input-player"], event.target.value))
               }}/>
        <button onClick={ (event) => {
                  props.dispatch(addPlayer(props.state.getIn(["ui", "input-player"])))
                }}>
                Add a player
        </button>
      </div>
    </div>
  )
}

export default Players

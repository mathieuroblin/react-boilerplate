import React from 'react'

import { addPlayer, editInput } from "../actions/actionCreators"

const displayPlayersList = (players_list) => {
  if (players_list) {
    return players_list.map( (player) => (<div>{ player }</div>) )
  }
}

const Players = (props) => {
  const player_name = props.state.getIn(["ui", "input-player"], "")
  const players_list = props.state.getIn(["data", "players"], [])

  return (
    <div>
      <h1>Players</h1>
      { displayPlayersList(players_list) }
      <div>
        <input id="input-name"
               onChange={ (event) => {
                 props.dispatch(editInput(["ui", "input-player"], event.target.value))
               }}
               value={ player_name }/>
        <button onClick={ (event) => {
                  props.dispatch(addPlayer(player_name))
                }}>
                Add a player
        </button>
      </div>
    </div>
  )
}

export default Players

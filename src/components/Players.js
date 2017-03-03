import React from 'react'

import { addPlayer } from "../actions/actionCreators"

const test = (players) => {
  if (players) {
    // console.log("players -> " + players)
    return players.map( (player) => (<div>Test</div>) )
  }
}

const Players = (props) => {
  return (
    <div>
      <h1>Players mmnbmbn</h1>
      <div>{ test(props.state) }</div>
      <div>
        <input id="input-name"></input>
        <button onClick={ (event) => {
                            props.dispatch(addPlayer(document.getElementById('input-name').value))}}>
                Add a player
        </button>
      </div>
    </div>
  )
}

export default Players

// const mapDispatchToProps = (dispatch, state) => {
//   return {
//     onAddPlayer: (name) => {
//       dispatch(addPlayer(name))
//     }
//   }
// }
//
// export default connect(null, mapDispatchToProps)(Players)

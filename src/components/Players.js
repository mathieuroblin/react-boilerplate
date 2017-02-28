import React from 'react'
import { connect } from 'react-redux'

import { addPlayer } from "../actions/actionCreators"

const Players = (props) => {
  return (
    <div>
      <h1>Players</h1>

       {["j1", "j2", "j3"].map(function(object, i){
        return <div>Players list</div>
       })}

      <div>
        <input id="input-name"></input>
        <button onClick={ (event) => {
                            props.onAddPlayer(document.getElementById('input-name').value)}}>
                Add a player
        </button>
      </div>

    </div>
  )
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    onAddPlayer: (name) => {
      dispatch(addPlayer(name))
    }
  }
}

export default connect(null, mapDispatchToProps)(Players)

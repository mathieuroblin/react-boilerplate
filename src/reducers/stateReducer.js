import { Map, List } from 'immutable'

import {
  ACTION_ADD_PLAYER,
  ACTION_EDIT_INPUT
} from '../actions/actionCreators'

const state = (state = Map(), action) => {
  switch (action.type) {
    case ACTION_ADD_PLAYER:
      const players = state.getIn(["data", "players"], List())

      return state.setIn(["data", "players"], players.push(action.name))
    case ACTION_EDIT_INPUT:
      return state.setIn(action.path, action.value)
    default:
      return state
  }
}

export default state

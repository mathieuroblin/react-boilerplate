import { List } from 'immutable'

const state = (state = List(), { type, name }) => {
  switch (type) {
    case "ADD_PLAYER":
      // console.log("state -> " + state)
      // console.log("type -> " + type + " / name -> " + name)
      return state.push(name)
      break;
    default:
      return state
  }
}

export default state

const players = (state = [], { type, name }) => {
  switch (type) {
    case "ADD_PLAYER":
      console.log("state -> " + state)
      console.log("type -> " + type + " / name -> " + name)

      state.push(name)
      break;
  }
  return state
}

export default players

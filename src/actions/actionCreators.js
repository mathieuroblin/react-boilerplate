export const ACTION_ADD_PLAYER = 'ADD_PLAYER'
export function addPlayer(name) {
  return {
    type: ACTION_ADD_PLAYER,
    name
  }
}

export const ACTION_EDIT_INPUT = 'EDIT_INPUT'
export function editInput(path, value) {
  return {
    type: ACTION_EDIT_INPUT,
    path,
    value
  }
}

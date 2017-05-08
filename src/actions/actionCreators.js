export const ACTION_INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export function incrementCounter() {
  return {
    type: ACTION_INCREMENT_COUNTER
  }
}

export const ACTION_EDIT_INPUT_IN = 'EDIT_INPUT_IN'
export function editInputIn(path, value) {
  return {
    type: ACTION_EDIT_INPUT_IN,
    path,
    value
  }
}

export const ACTION_ADD_USER = 'ADD_USER'
export function addUser(path, username) {
  return {
    type: ACTION_ADD_USER,
    path,
    username
  }
}

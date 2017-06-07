import { Map, List } from 'immutable'

import {
  ACTION_INCREMENT_COUNTER,
  ACTION_EDIT_INPUT_IN,
  ACTION_ADD_USER
} from '../actions/actionCreators'

// UTILS

const applyFn = (state, fn) => fn(state)

const pipe = (fns, state) =>
  state.withMutations(s => fns.reduce(applyFn, s))

// MUTATIONS

const incrementCounter = () => (state) => {
  const counter = state.getIn(["counter"], 0)
  return state.setIn(["counter"], counter + 1)
}

const editInputIn = (path, value) => (state) => {
  return state.setIn(path, value)
}

const addUser = (path, username) => (state) => {
  const users = state.getIn(path, List())
  return state.setIn(path, users.push(username))
}

// REDUCER

const stateReducer = (state = Map(), action) => {
    const reducer = {
        [ACTION_INCREMENT_COUNTER]: () => [incrementCounter()],
        [ACTION_EDIT_INPUT_IN]: () => [editInputIn(action.path, action.value)],
        [ACTION_ADD_USER]: () => [addUser(action.path, action.username),
                                  editInputIn(["username"], "")],
        DEFAULT: () => state
    };
    return reducer[action.type] ? pipe([...reducer[action.type]()], state) : reducer.DEFAULT();
};

export default stateReducer;

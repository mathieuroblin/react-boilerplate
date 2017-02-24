import { createStore, compose } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/rootReducer'

const posts = ["Post 1", "Post 2", "Post 3"]
const comments = ["Comment 1", "Comment 2", "Comment 3"]

const defaultState = {
  posts,
  comments
}

export default const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

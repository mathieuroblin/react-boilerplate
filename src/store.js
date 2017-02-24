import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/rootReducer'

const posts = ["Post 1", "Post 2", "Post 3"]
const comments = ["Comment 1", "Comment 2", "Comment 3"]

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer,
                          defaultState,
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const history = syncHistoryWithStore(browserHistory, store)

export default store

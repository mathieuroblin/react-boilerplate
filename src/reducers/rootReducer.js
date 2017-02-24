import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './postsReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({ posts,
                                      comments,
                                      routing: routerReducer })

export default rootReducer;

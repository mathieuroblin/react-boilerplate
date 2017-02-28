import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import players from './playersReducer'

const rootReducer = combineReducers({ players,
                                      routing: routerReducer })

export default rootReducer;

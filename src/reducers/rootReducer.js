import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import state from './stateReducer'

const rootReducer = combineReducers({ state,
                                      routing: routerReducer })

export default rootReducer;

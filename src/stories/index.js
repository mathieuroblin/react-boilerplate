import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Map } from 'immutable'
import { storiesOf, action, linkTo } from '@kadira/storybook';

import StateToProps from './StateToProps'
import rootReducer from '../reducers/rootReducer'

import Players from '../components/Players'

// CAN't MAKE IT WORK WITH A FUNCTION TO GENERATE THE STORE
const tempStore = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const tempStore2 = createStore(rootReducer, {state: Map({ui: Map({'input-player': 'init'})})}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
storiesOf('My components', module)
  .add('Players no init', () => (
    <Provider store={ tempStore }>
      <StateToProps>
        <Players />
      </StateToProps>
    </Provider>
  ))
  .add('Players for test', () => (
    <Provider store={ tempStore2 }>
      <StateToProps>
        <Players />
      </StateToProps>
    </Provider>
  ))

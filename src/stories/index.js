import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { storiesOf } from '@kadira/storybook';
import { List } from 'immutable'

import StateToProps from './StateToProps'
import rootReducer from '../reducers/rootReducer'

import PrimaryButton from '../components/PrimaryButton'
import BasicInput from '../components/BasicInput'
import TableDemo from '../components/TableDemo'

import { incrementCounter, editInputIn } from '../actions/actionCreators'

// const tempStore2 = createStore(rootReducer, {state: Map({ui: Map({'input-player': 'init'})})}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const tempStore = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const SbPrimaryButton = (props) => {
  return (
    <PrimaryButton state={props.state}
                   label='PrimaryButton'
                   onClick={ (event) => {
                     props.dispatch(incrementCounter())
                   }}/>
  )
}

storiesOf('Buttons', module)
  .add('PrimaryButton', () => (
    <Provider store={ tempStore }>
      <StateToProps>
        <SbPrimaryButton />
      </StateToProps>
    </Provider>
  ))

const SbBasicInput = (props) => {
  const value = props.state.getIn(["input", "value", "demo"], "empty")
  return (
    <BasicInput state={props.state}
                onChange={ (event) => {
                  props.dispatch(editInputIn(["input", "value", "demo"],
                                             event.target.value))
                }}
                value={value}/>
  )
}

storiesOf('Inputs', module)
  .add('BasicInput', () => (
    <Provider store={ tempStore }>
      <StateToProps>
        <SbBasicInput />
      </StateToProps>
    </Provider>
  ))

const SbTableDemo = (props) => {
  const users = props.state.getIn(["demo", "collections", "users"],
                                  List(["User", "User", "User"]))
  return (
    <TableDemo state={props.state}
               collection={users}/>
  )
}

storiesOf('Tables', module)
  .add('TableDemo', () => (
    <Provider store={ tempStore }>
      <StateToProps>
        <SbTableDemo />
      </StateToProps>
    </Provider>
  ))

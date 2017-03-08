import React from 'react';
import { Provider } from 'react-redux'
import { storiesOf, action, linkTo } from '@kadira/storybook';

import store from '../store'
import StateToProps from './StateToProps'

import Players from '../components/Players'


storiesOf('My components', module)
  .addDecorator((story) => (<Provider store={ store }>
                              <StateToProps>
                                { story() }
                              </StateToProps>
                            </Provider>
  ))

  .add('Players', () => (
    <Players />
  ))

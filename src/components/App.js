import React from 'react'
import { Provider } from 'react-redux'

// import AppRouter from './AppRouter'
import store from '../store'

import { Router, Route, IndexRoute } from 'react-router'

import StateToProps from './StateToProps'
import Players from './Players'
import Leaderboard from './Leaderboard'
import ScrollTest from './ScrollTest'
import { history } from '../store'

require('smoothscroll-polyfill').polyfill();

const App = () => {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path='/' component={ StateToProps }>
          <IndexRoute component={ Players } />
          <Route path='leaderboard' component={ Leaderboard } />
          <Route path='scrollTest' component={ ScrollTest } />
        </Route>
      </Router>
    </Provider>
  )
}

export default App

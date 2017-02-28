import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
import Players from './components/Players'
import Leaderboard from './components/Leaderboard'
import store, { history } from './store'

import './resources/css/index.css'


const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Players } />
        <Route path='leaderboard' component={ Leaderboard } />
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.getElementById('root')
);

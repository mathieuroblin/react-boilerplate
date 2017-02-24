import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
// import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import store, { history } from './store'

import './resources/css/index.css'


const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ PhotoGrid }></IndexRoute>
        <Route path='/test' component={ Single }></Route>
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.getElementById('root')
);

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import './resources/css/index.css'


const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ PhotoGrid }></IndexRoute>
      <Route path='/test' component={ Single }></Route>
    </Route>
  </Router>
)

render(
  router,
  document.getElementById('root')
);

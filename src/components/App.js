import React from 'react'
import { Provider } from 'react-redux'

// import AppRouter from './AppRouter'
import store from '../store'

import { Router, Route, IndexRoute } from 'react-router'

import StateToProps from './StateToProps'
import Page from './Page'
import { history } from '../store'


const App = (props) => {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path='/' component={ StateToProps }>
          <IndexRoute component={ Page } />
        </Route>
      </Router>
    </Provider>
  )
}

export default App

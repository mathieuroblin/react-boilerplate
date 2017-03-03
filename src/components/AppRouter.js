import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import Main from './Main'
import Players from './Players'
import Leaderboard from './Leaderboard'
import { history } from '../store'


const mapStateToProps = (store) => {
  return {
    state: store.state
  }
}

const AppRouter = (props) => {
  return (
    <Router history={ history }>
      <Route path='/' component={ Main }>
        <IndexRoute component={ Players } />
        <Route path='leaderboard' component={ Leaderboard } />
      </Route>
    </Router>
  )
}

// export default AppRouter
export default connect(mapStateToProps)(Main)

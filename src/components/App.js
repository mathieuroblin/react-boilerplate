import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actionCreators, dispatch)
// }

const App = connect(mapStateToProps)(Main)

export default App

// TO DO
// Retirer le mapDispatchToProps et le mettre dans chacun des composants
// Pas logique d'avoir tous les dispatch dans tous les elements

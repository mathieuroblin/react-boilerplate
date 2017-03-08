import { connect } from 'react-redux'

import Main from './Main'

const mapStateToProps = (store) => {
  return {
    state: store.state
  }
}

export default connect(mapStateToProps)(Main)

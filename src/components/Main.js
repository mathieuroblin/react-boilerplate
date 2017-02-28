import React from 'react';
import { Link } from 'react-router'

import '../resources/css/App.css';

import logo from '../resources/images/logo.svg';

const Main = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h2>Welcome to the Leaderboard</h2>
        <button>
          <Link to="/">Players</Link>
        </button>
        <button>
          <Link to="/leaderboard">Leaderboard</Link>
        </button>
      </div>
      { React.cloneElement(props.children, props) }
    </div>
  )
}

export default Main;

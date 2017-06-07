import React from 'react';
import { Link } from 'react-router'

import '../resources/css/App.css';

import logo from '../resources/images/logo.svg';

const Main = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h2>Subtitle</h2>
      </div>
      { React.cloneElement(props.children, props) }
    </div>
  )
}

export default Main;

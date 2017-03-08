import React from 'react';
import { Link } from 'react-router'

import '../resources/css/App.css';

import logo from '../resources/images/logo.svg';

const Main = (props) => {
  return (
    <div>
      { React.cloneElement(props.children, props) }
    </div>
  )
}

export default Main;

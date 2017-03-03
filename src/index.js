import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import './resources/css/index.css'

render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}

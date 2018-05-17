import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// require('./background.js')

require('../scss/main.scss');

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

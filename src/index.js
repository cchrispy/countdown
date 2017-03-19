import React, { Component } from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for material-ui


import Main from './components/Main.jsx';

render(
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>,
  document.getElementById('main')
)
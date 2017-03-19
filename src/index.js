import React, { Component } from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for material-ui

import Main from './components/Main.jsx';

render(
  <Main />,
  document.getElementById('main')
)
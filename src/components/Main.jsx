import React, { Component } from 'react';

import '../styles/main.scss';
import TimeBox from './TimeBox.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className='header'>Countdown Timer</h1>
        <hr/>
        <TimeBox counter={ 99 } type='day' />
        <TimeBox counter={ 99 } type='hour' />
        <TimeBox counter={ 99 } type='minute' />
        <TimeBox counter={ 99 } type='second' />
      </div>
    )
  }
}

export default Main;
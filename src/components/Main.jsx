import React, { Component } from 'react';

import '../styles/main.scss';
import TimeBox from './TimeBox.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 99,
      hour: 99,
      minute: 99,
      second: 99
    };
  }

  render() {
    return (
      <div>

        <h1 className='header'>Countdown Timer</h1>
        <hr/>

        <TimeBox counter={ this.state.day } type='day' />
        <TimeBox counter={ this.state.hour } type='hour' />
        <TimeBox counter={ this.state.minute } type='minute' />
        <TimeBox counter={ this.state.second } type='second' />
        
      </div>
    )
  }
}

export default Main;
import React, { Component } from 'react';

import '../styles/main.scss';
import TimeInput from './TimeInput.jsx';
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

  handleChange(e, i, value) {
    this.setState({
      hour: value
    })
  }

  render() {
    return (
      <div>

        <h1 className='header'>Countdown Timer</h1>
        <hr/>

        <div>
        <TimeInput
          val={ 2 }
          label={ 'days' }
          count={ 99 }
          handleChange={ this.handleChange.bind(this) } />
        <TimeInput
          val={ 2 }
          label={ 'hours' }
          count={ 23 }
          handleChange={ this.handleChange.bind(this) } />
        <TimeInput
          val={ 2 }
          label={ 'minutes' }
          count={ 59 }
          handleChange={ this.handleChange.bind(this) } />
        <TimeInput
          val={ 2 }
          label={ 'seconds' }
          count={ 59 }
          handleChange={ this.handleChange.bind(this) } />
        </div>

        <TimeBox counter={ this.state.day } type='day' />
        <TimeBox counter={ this.state.hour } type='hour' />
        <TimeBox counter={ this.state.minute } type='minute' />
        <TimeBox counter={ this.state.second } type='second' />

      </div>
    )
  }
}

export default Main;
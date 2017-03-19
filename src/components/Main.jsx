import React, { Component } from 'react';

import '../styles/main.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TimeInput from './TimeInput.jsx';
import TimeBox from './TimeBox.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      inputs: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
      ticking: false
    };
    this.interval = null;
  }

  handleChange(type, e, i, value) {
    this.setState({
      [type]: value,
      inputs: Object.assign({}, this.state.inputs, { [type]: value })
    })
  }

  toggleInterval() {
    if (this.state.ticking) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {}, 1000);
    }
  }

  render() {
    return (
      <div>

        <h1 className='header'>Countdown Timer</h1>
        <hr/>

        <div><RaisedButton label={ this.state.ticking ? 'Stop' : 'Start' } onTouchTap={ this.toggleInterval.bind(this) }/></div>

        <div>
          <TimeInput
            val={ this.state.inputs.day }
            label={ 'days' }
            count={ 99 }
            handleChange={ this.handleChange.bind(this, 'day') } />
          <TimeInput
            val={ this.state.inputs.hour }
            label={ 'hours' }
            count={ 23 }
            handleChange={ this.handleChange.bind(this, 'hour') } />
          <TimeInput
            val={ this.state.inputs.minute }
            label={ 'minutes' }
            count={ 59 }
            handleChange={ this.handleChange.bind(this, 'minute') } />
          <TimeInput
            val={ this.state.inputs.second }
            label={ 'seconds' }
            count={ 59 }
            handleChange={ this.handleChange.bind(this, 'second') } />
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
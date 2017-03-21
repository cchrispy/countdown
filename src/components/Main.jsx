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
      this.setState({ ticking: false })
    } else {
      this.setState(Object.assign({}, this.state, this.state.inputs, { ticking: true }));
      this.interval = setInterval(this.tick.bind(this), 1000);
    }
  }

  tick() {
    let total = (this.state.day * 86400) + (this.state.hour * 3600) + (this.state.minute * 60) + (this.state.second);
    if (total <= 0) {
      this.setState({ second: 0 });
      this.toggleInterval();
    } else {
      total--;
      let day = 0, hour = 0, minute = 0;
      while (total > 86400 - 1) {
        day++;
        total -= 86400;
      }
      while (total > 3600 - 1) {
        hour++;
        total -= 3600;
      }
      while (total > 60 - 1) {
        minute++;
        total -= 60;
      }
      let second = total;
      this.setState({ day, hour, minute, second });
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
            ticking={ this.state.ticking }
            handleChange={ this.handleChange.bind(this, 'day') } />
          <TimeInput
            val={ this.state.inputs.hour }
            label={ 'hours' }
            count={ 23 }
            ticking={ this.state.ticking }
            handleChange={ this.handleChange.bind(this, 'hour') } />
          <TimeInput
            val={ this.state.inputs.minute }
            label={ 'minutes' }
            count={ 59 }
            ticking={ this.state.ticking }
            handleChange={ this.handleChange.bind(this, 'minute') } />
          <TimeInput
            val={ this.state.inputs.second }
            label={ 'seconds' }
            count={ 59 }
            ticking={ this.state.ticking }
            handleChange={ this.handleChange.bind(this, 'second') } />
        </div>


        <TimeBox counter={ this.state.day } type='days' />
        <TimeBox counter={ this.state.hour } type='hours' />
        <TimeBox counter={ this.state.minute } type='minutes' />
        <TimeBox counter={ this.state.second } type='seconds' />

      </div>
    )
  }
}

export default Main;
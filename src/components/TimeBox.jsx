import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const TimeBox = props => (
  <div className='timebox'>
    <Paper zDepth={ 3 } className='paperWrap'>
      <h2 className='counter'>{ props.counter }</h2>
      <div className='timeType'>{ props.type }</div>
    </Paper>
  </div>
)

export default TimeBox;
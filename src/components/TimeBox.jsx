import React, { Component } from 'react';

const TimeBox = props => (
  <div className='timebox'>
    <h3>{ props.counter }</h3>
    <div>{ props.type }</div>
  </div>
)

export default TimeBox;
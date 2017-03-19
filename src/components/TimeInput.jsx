import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'

const TimeInput = props => {

  let items = [];
  for (let i = 0; i <= props.count; i++) {
    items.push(<MenuItem value={ i } primaryText={ i } key={ i }/>)
  }

  return (
    <div className='timeInput'>
      <h4>{ props.label }</h4>
      <div>
        <SelectField
          value={ props.val }
          onChange={ props.handleChange }
          maxHeight={ 400 }
          style={{ width: '100px' }} >

          { items }

        </SelectField>
      </div>
    </div>
  )
}

export default TimeInput;
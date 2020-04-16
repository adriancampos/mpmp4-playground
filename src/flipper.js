import React from 'react';
import { Radio, Button } from '@material-ui/core';

function Flipper(props) {

  var radios = [];
  for (let i = 0; i < props.n; i++) {
    radios.push(
      <Radio
        checked={props.selectedValue == i}
        onChange={(e) => props.onChange(e.target.value)}
        value={i}
        name={"radio-button-" + i}
        inputProps={{ 'aria-label': 'Card ' + i }}
        key={i}
      />
    );
  }

  return (
    <div key={props.i}>
      Flip {props.i + 1}
      <Button onClick={(e) => props.onChange(null)}>Clear</Button>
      {radios}
    </div>
  );
}

export default Flipper;

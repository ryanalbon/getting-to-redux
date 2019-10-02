import React from 'react';
import WithAppContext from './WithAppContext';

function Gadget(props) {
  return (
    <div>
      <span>Gadget: {props.gadget} ({props.i})</span>
      <button onClick={() => props.dispatch({ type: 'DELETE_GADGET', i: props.i })}>del</button>
    </div>
  );
}

export default WithAppContext()(Gadget);

import React from 'react';
import WithAppContext from './WithAppContext';

function Widget(props) {
  return (
    <div>
      <span>Widget: {props.widget} ({props.i})</span>
      <button onClick={() => props.dispatch({ type: 'DELETE_WIDGET', i: props.i })}>del</button>
    </div>
  );
}

export default WithAppContext()(Widget);

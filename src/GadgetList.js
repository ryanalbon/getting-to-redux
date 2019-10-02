import React from 'react';
import WithAppContext from './WithAppContext';

function GadgetList(props) {
  return props.gadgets.map((gadget, i) => <div key={i}>Gadget: {gadget}</div>);
}

export default WithAppContext(({ gadgets }) => ({ gadgets }))(GadgetList);

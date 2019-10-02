import React from 'react';
import Gadget from './Gadget';
import WithAppContext from './WithAppContext';

function GadgetList(props) {
  return props.gadgets.map((gadget, i) => <Gadget key={i} gadget={gadget} i={i} />);
}

export default WithAppContext(({ gadgets }) => ({ gadgets }))(GadgetList);

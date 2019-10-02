import React from 'react';
import WithAppContext from './WithAppContext';
import Widget from './Widget';

function WidgetList(props) {
  return props.widgets.map((widget, i) => <Widget key={i} widget={widget} i={i} />);
}

const WidgetListWithAppContext = WithAppContext(({ widgets }) => ({ widgets }))(WidgetList);

export default WidgetListWithAppContext;

import React from 'react';
import WithAppContext from './WithAppContext';

function WidgetList(props) {
  return props.widgets.map((widget, i) => <div key={i}>Widget: {widget}</div>);
}

const WidgetListWithAppContext = WithAppContext(({ widgets }) => ({ widgets }))(WidgetList);

export default WidgetListWithAppContext;

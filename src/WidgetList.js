import React from 'react';

function WidgetList(props) {
  return props.widgets.map((widget, i) => <div key={i}>Widget: {widget}</div>);
}

export default WidgetList;

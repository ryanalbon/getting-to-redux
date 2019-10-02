import React from 'react';
import AppContext from './AppContext';

function WidgetListWithAppContext(props) {
  return (
    <AppContext.Consumer>
      {
        context => <WidgetList widgets={context.widgets} {...props} />
      }
    </AppContext.Consumer>
  );
}

function WidgetList(props) {
  return props.widgets.map((widget, i) => <div key={i}>Widget: {widget}</div>);
}

export default WidgetListWithAppContext;

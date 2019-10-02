import React from 'react';
import WidgetList from './WidgetList';

class App extends React.Component {
  state = {
    widgets: ['alice', 'bob'],
  };

  render() {
    return (
      <WidgetList widgets={this.state.widgets} />
    );
  }
}

export default App;

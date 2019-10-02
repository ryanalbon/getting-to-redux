import React from 'react';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

class App extends React.Component {
  state = {
    widgets: ['alice', 'bob'],
  };

  render() {
    return (
      <main>
        <WidgetForm onSubmit={widget => this.addWidget(widget)} />
        <WidgetList widgets={this.state.widgets} />
      </main>
    );
  }

  addWidget(widget) {
    this.setState(({ widgets }) => ({ widgets: [ ...widgets, widget ] }));
  }
}

export default App;

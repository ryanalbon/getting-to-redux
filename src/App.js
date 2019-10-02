import React from 'react';
import AppContext from './AppContext';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

class App extends React.Component {
  state = {
    widgets: ['alice', 'bob'],
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <WidgetForm onSubmit={widget => this.addWidget(widget)} />
        <WidgetList />
      </AppContext.Provider>
    );
  }

  addWidget(widget) {
    this.setState(({ widgets }) => ({ widgets: [ ...widgets, widget ] }));
  }
}

export default App;

import React from 'react';
import AppContext from './AppContext';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

class App extends React.Component {
  state = {
    widgets: ['alice', 'bob'],
    addWidget: widget => this.setState(state => ({ widgets: [ ...state.widgets, widget] })),
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <WidgetForm />
        <WidgetList />
      </AppContext.Provider>
    );
  }
}

export default App;

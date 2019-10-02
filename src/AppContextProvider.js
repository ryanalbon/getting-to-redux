import React from 'react';
import AppContext from './AppContext';

class AppContextProvider extends React.Component {
  state = {
    widgets: ['alice', 'bob'],
    addWidget: widget => this.setState(state => ({ widgets: [ ...state.widgets, widget ] })),
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;

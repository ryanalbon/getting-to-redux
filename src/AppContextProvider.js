import React from 'react';
import AppContext from './AppContext';

function createStore() {
  let callback = () => {};
  let state = {
    widgets: ['alice', 'bob'],
    addWidget: widget => {
      state.widgets = [ ...state.widgets, widget ];
      callback(state);
    },
  };

  return {
    getState: () => state,
    setCallback: cb => callback = cb,
  };
}

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    const store = createStore();
    store.setCallback(state => this.setState({ ...state }));
    this.state = { ...store.getState() };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;

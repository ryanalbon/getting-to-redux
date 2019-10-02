import React from 'react';
import AppContext from './AppContext';

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    props.store.setCallback(state => this.setState({ ...state }));
    this.state = { ...props.store.getState(), dispatch: props.store.dispatch };
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

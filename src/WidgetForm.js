import React from 'react';
import AppContext from './AppContext';

function WidgetFormWithAppContext(props) {
  return (
    <AppContext.Consumer>
      {
        context => <WidgetForm dispatch={context.dispatch} {...props} />
      }
    </AppContext.Consumer>
  );
}

class WidgetForm extends React.Component {
  state = {
    widget: ''
  };

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          value={this.state.widget}
          onChange={e => this.setState({ widget: e.target.value })}
        />
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch({ type: 'ADD_WIDGET', widget: this.state.widget });
    this.setState({ widget: '' });
  }
}

export default WidgetFormWithAppContext;

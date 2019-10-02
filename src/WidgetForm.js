import React from 'react';
import WithAppContext from './WithAppContext';

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

const WidgetFormWithAppContext = WithAppContext()(WidgetForm);

export default WidgetFormWithAppContext;

import React from 'react';

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
    this.props.onSubmit(this.state.widget);
    this.setState({ widget: '' });
  }
}

export default WidgetForm;

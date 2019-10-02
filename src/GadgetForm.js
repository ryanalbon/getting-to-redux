import React from 'react';
import WithAppContext from './WithAppContext';

class GadgetForm extends React.Component {
  state = {
    gadget: ''
  };

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          value={this.state.gadget}
          onChange={e => this.setState({ gadget: e.target.value })}
        />
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch({ type: 'ADD_GADGET', gadget: this.state.gadget });
    this.setState({ gadget: '' });
  }
}

export default WithAppContext()(GadgetForm);

import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './AppContextProvider';
import App from './App';
import createStore from './create-store';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_WIDGET':
      return { ...state, widgets: [ ...state.widgets, action.widget ] };

    case 'DELETE_WIDGET':
      return { ...state, widgets: state.widgets.filter((widget, i) => i !== action.i) };

    case 'ADD_GADGET':
      return { ...state, gadgets: [ ...state.gadgets, action.gadget ] };

    case 'DELETE_GADGET':
      return { ...state, gadgets: state.gadgets.filter((gadget, i) => i !== action.i) };

    default:
      return state;
  }
}

const store = createStore(reducer, {
  widgets: ['alice', 'bob'],
  gadgets: ['claire', 'dave'],
});

ReactDOM.render(<AppContextProvider store={store}><App /></AppContextProvider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './AppContextProvider';
import App from './App';
import createStore from './create-store';
import reducer from './reducer';

const store = createStore(reducer, {
  widgets: ['alice', 'bob'],
  gadgets: ['claire', 'dave'],
});

ReactDOM.render(<AppContextProvider store={store}><App /></AppContextProvider>, document.getElementById('root'));

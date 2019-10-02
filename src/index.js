import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './AppContextProvider';
import App from './App';
import createStore from './create-store';

const store = createStore();

ReactDOM.render(<AppContextProvider store={store}><App /></AppContextProvider>, document.getElementById('root'));

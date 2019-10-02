import React from 'react';
import AppContext from './AppContext';

function WithAppContext(getPropsFromState) {
  return function (Component) {
    return function (props) {
      return (
        <AppContext.Consumer>
          {
            context => {
              const propsFromState = getPropsFromState ? getPropsFromState(context) : {};
              return <Component {...propsFromState} dispatch={context.dispatch} {...props} />
            }
          }
        </AppContext.Consumer>
      );
    };
  };
}

export default WithAppContext;

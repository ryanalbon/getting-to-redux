function gadgetsReducer(state, action) {
  switch (action.type) {
    case 'ADD_GADGET':
      return [ ...state, action.gadget ];

    case 'DELETE_GADGET':
      return state.filter((gadget, i) => i !== action.i);

    default:
      return state;
  }
}

function widgetsReducer(state, action) {
  switch (action.type) {
    case 'ADD_WIDGET':
      return [ ...state, action.widget ];

    case 'DELETE_WIDGET':
      return state.filter((widget, i) => i !== action.i);

    default:
      return state;
  }
}

function combineReducers(reducerMap) {
  return function (state, action) {
    return Object.entries(reducerMap).reduce(
      function (result, [key, reducer]) {
        return {
          ...result,
          [key]: reducer(state[key], action),
        };
      },
      {},
    );
  };
}

export default combineReducers({
  gadgets: gadgetsReducer,
  widgets: widgetsReducer,
});

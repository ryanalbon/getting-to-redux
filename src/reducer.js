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

function reducer(state, action) {
  return {
    gadgets: gadgetsReducer(state.gadgets, action),
    widgets: widgetsReducer(state.widgets, action),
  };
}

export default reducer;

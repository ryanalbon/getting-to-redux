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

export default reducer;

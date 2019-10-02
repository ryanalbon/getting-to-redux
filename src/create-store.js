function createStore() {
  let callback = () => {};
  let state = {
    widgets: ['alice', 'bob'],
    addWidget: widget => {
      state.widgets = [ ...state.widgets, widget ];
      callback(state);
    },
  };

  return {
    getState: () => state,
    setCallback: cb => callback = cb,
  };
}

export default createStore;

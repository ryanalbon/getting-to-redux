function createStore(reducer, initialState) {
  let callback = () => {};
  let state = initialState;

  return {
    getState: () => state,
    setCallback: cb => callback = cb,
    dispatch: action => callback(state = reducer(state, action)),
  };
}

export default createStore;

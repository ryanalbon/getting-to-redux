function createStore(reducer) {
  let callback = () => {};
  let state = {
    widgets: ['alice', 'bob'],
  };

  return {
    getState: () => state,
    setCallback: cb => callback = cb,
    dispatch: action => callback(state = reducer(state, action)),
  };
}

export default createStore;

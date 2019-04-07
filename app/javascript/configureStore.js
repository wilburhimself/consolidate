import { createStore } from 'redux'

const initialState = {
  events: []
}

const rootReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    default:
      return state
  }
}

export default () => createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

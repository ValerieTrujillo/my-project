import { createStore, applyMiddlewear, compose } from "redux;";
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
  applyMiddlewear(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
  )
);

export default store;

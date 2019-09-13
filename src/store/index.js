import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { chat } from "./chat/reducer";
import { user } from "./user/reducer";

export const appReducer = combineReducers({
  chat,
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP_STATE') {
    state = undefined
  }
  return appReducer(state, action)
}


const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
);

const store = createStore(
  rootReducer,
  enhancer
);

export default store;

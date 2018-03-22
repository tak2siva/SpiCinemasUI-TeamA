import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from "react-router-redux";
import createLogger from "redux-logger";
import rootReducer from "./rootReducer";

const devToolsExtension = () =>
  window.devToolsExtension ? window.devToolsExtension() : f => f;

const configureStore = history => {
  return process.env.NODE_ENV === "production"
    ? createStore(
        rootReducer,
        {},
        applyMiddleware(thunk, routerMiddleware(history))
      )
    : createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, createLogger, routerMiddleware(history)),
        devToolsExtension(),
      );
};

export default configureStore;

// store/configureStore.js
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import localStorageMiddleware from "./middleware/localStorageMiddleware";
import appReducer from "./reducers/appReducer";
import chatReducer from "./reducers/chatReducer";
import messageReducer from "./reducers/messageReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  app: appReducer,
  chats: chatReducer,
  users: userReducer,
  messages: messageReducer,
});

//const configureStore = () => createStore(rootReducer, applyMiddleware(logger));

const persistedState = JSON.parse(localStorage.getItem("reduxState")) || {};
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, localStorageMiddleware, logger)
);

export default store;

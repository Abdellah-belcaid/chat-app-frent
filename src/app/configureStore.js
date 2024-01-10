// store/configureStore.js
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import chatReducer from "../reducers/chatReducer";
import messageReducer from "../reducers/messageReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  chats: chatReducer,
  users: userReducer,
  messages: messageReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(logger));

export default configureStore;

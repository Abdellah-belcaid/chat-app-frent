// actions/chatActions.js

import { ADD_CHAT } from "../app/constants";

export const addChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});

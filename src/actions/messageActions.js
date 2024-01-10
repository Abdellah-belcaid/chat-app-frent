// actions/messageActions.js

import { ADD_MESSAGE } from "../app/constants";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

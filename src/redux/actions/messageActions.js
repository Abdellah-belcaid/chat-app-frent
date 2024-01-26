// messageActions.js

import { ADD_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE } from "../constants";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const updateMessage = (messageId, updatedMessageData) => ({
  type: UPDATE_MESSAGE,
  payload: { messageId, updatedMessageData },
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});

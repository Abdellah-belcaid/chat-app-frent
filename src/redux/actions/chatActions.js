// chatActions.js

import { ADD_CHAT, UPDATE_CHAT, DELETE_CHAT } from "../constants";

export const addChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});

export const updateChat = (chatId, updatedChatData) => ({
  type: UPDATE_CHAT,
  payload: { chatId, updatedChatData },
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

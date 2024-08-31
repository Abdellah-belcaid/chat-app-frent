// chatActions.js
import ChatService from "src/services/chatService";
import * as types from "../constants";

import { UPDATE_CHAT } from "../constants";

export const updateChat = (chatId, updatedChatData) => ({
  type: UPDATE_CHAT,
  payload: { chatId, updatedChatData },
});

export const createNewChat = (newChatData) => {
  return async (dispatch) => {
    dispatch({ type: types.CREATE_NEW_CHAT_REQUEST });

    try {
      const newChat = await ChatService.createNewChat(newChatData);
      dispatch({ type: types.CREATE_NEW_CHAT_SUCCESS, payload: newChat });
    } catch (error) {
      dispatch({ type: types.CREATE_NEW_CHAT_FAILURE, error: error.message });
    }
  };
};

export const fetchChats = (userId) => {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_CHATS_REQUEST });

    try {
      const chats = await ChatService.fetchChats(userId);
      dispatch({ type: types.FETCH_CHATS_SUCCESS, payload: chats });
    } catch (error) {
      dispatch({ type: types.FETCH_CHATS_FAILURE, error: error.message });
    }
  };
};

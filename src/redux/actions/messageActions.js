import MessageService from "src/services/messageService";
import * as types from "../constants";

export const addNewMessage = (newMessage) => {
  return async (dispatch) => {
    dispatch({ type: types.ADD_MESSAGE_REQUEST });

    try {
      const addedMessage = await MessageService.sendMessage(newMessage);
      dispatch({ type: types.ADD_MESSAGE_SUCCESS, payload: addedMessage });
    } catch (error) {
      dispatch({ type: types.ADD_MESSAGE_FAILURE, payload: error.message });
    }
  };
};

export const fetchMessagesByChatId = (chatId) => async (dispatch) => {
  dispatch({ type: types.FETCH_MESSAGES_REQUEST });
  try {
    const response = await MessageService.getMessagesByChatId(chatId);
    dispatch({ type: types.FETCH_MESSAGES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.FETCH_MESSAGES_FAILURE, payload: error.message });
  }
};

export const getMessagesByUserId = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.FETCH_USER_MESSAGES_REQUEST });
      const messages = await MessageService.fetchUserMessages(userId);

      dispatch({ type: types.FETCH_USER_MESSAGES_SUCCESS, payload: messages });
    } catch (error) {
      dispatch({ type: types.FETCH_USER_MESSAGES_FAILURE, payload: error });
    }
  };
};

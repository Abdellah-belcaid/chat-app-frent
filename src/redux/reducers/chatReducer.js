// reducers/chatReducer.js

import { chats } from "../../data/testData2";
import { ADD_CHAT, DELETE_CHAT, UPDATE_CHAT } from "../constants";

const initialState = {
  chats: chats,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    case UPDATE_CHAT:
      const { chatId, updatedChatData } = action.payload;
      return {
        ...state,
        chats: state.chats.map((chat) =>
          chat.id === chatId ? { ...chat, ...updatedChatData } : chat
        ),
      };
    case DELETE_CHAT:
      const chatIdToDelete = action.payload;
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== chatIdToDelete),
      };
    default:
      return state;
  }
};

export default chatReducer;

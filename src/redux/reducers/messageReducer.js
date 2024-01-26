// reducers/messageReducer.js

import { ADD_MESSAGE } from "../constants";
import { messages } from "../../data/testData2";

const initialState = {
  messages: messages,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default messageReducer;

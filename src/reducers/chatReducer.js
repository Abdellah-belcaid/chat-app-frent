// reducers/chatReducer.js

import { ADD_CHAT } from "../app/constants";

const chatReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default chatReducer;

// reducers/messageReducer.js

import { ADD_MESSAGE } from "../app/constants";

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default messageReducer;

// reducers/userReducer.js

import { users } from "../../data/testData2";

// userReducer.js
import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  LOAD_USER_INFO,
} from "../constants";

const initialState = {
  users: users,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case LOAD_USER_INFO:
      // const userId = action.payload;
      // const user = state.users.find((user) => user.id === userId);
      // Handle loading user info from the database or another source if needed
      return {
        ...state,
        // Update user info in the state
      };

    default:
      return state;
  }
};

export default userReducer;

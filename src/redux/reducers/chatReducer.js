// reducers/chatReducer.js
import * as types from "../constants";

const initialState = {
  chats: [],
  loading: false,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NEW_CHAT_REQUEST:
      return { ...state, loading: true, error: null };
    case types.CREATE_NEW_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chats: [...state.chats, action.payload],
        error: null,
      };
    case types.CREATE_NEW_CHAT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    // Add other cases for handling different chat actions

    case types.FETCH_CHATS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_CHATS_SUCCESS:
      return { ...state, loading: false, chats: action.payload, error: null };
    case types.FETCH_CHATS_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default chatReducer;

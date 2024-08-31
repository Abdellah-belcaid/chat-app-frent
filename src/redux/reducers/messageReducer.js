// reducers/messageReducer.js
import * as types from "../constants";

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
      };
    case types.ADD_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
        error: null,
      };
    case types.FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCH_USER_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };
    case types.FETCH_USER_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;

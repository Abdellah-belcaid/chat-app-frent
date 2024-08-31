// reducers/userReducer.js
import * as types from "../constants";

const storedUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
  users: [],
  currentUser: storedUser ? storedUser : null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // this is for testing :
    case types.FETCH_ALL_USERS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_ALL_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: null };
    case types.FETCH_ALL_USERS_FAILURE:
      return { ...state, loading: false, error: action.error };
    // Add other cases for handling different user actions
    case types.REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_USER_SUCCESS:
      return { ...state, loading: false };
    case types.REGISTER_USER_FAILURE:
      return { ...state, loading: false, error: action.error };

    case types.LOGIN_USER_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.LOGIN_USER_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default userReducer;

// case REGISTER_USER_SUCCESS:
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };

//     case REGISTER_USER_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//       };

//     case LOGIN_USER_SUCCESS:
//       return {
//         ...state,
//         currentUser: action.payload,
//         error: null,
//       };

//     case LOGIN_USER_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//       };

//     case UPDATE_USER:
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.payload.id ? action.payload : user
//         ),
//       };
//     case CLEAR_ERROR:
//       return {
//         ...state,
//         error: null,
//       };

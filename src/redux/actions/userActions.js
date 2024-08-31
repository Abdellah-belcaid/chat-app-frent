// userActions.js
import * as types from "../constants";
import UserService from "src/services/UserService";
import AuthService from "src/services/authService";

export const fetchAllUsers = () => {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_ALL_USERS_REQUEST });

    try {
      const users = await UserService.fetchAllUsers();
      dispatch({ type: types.FETCH_ALL_USERS_SUCCESS, payload: users });
    } catch (error) {
      dispatch({ type: types.FETCH_ALL_USERS_FAILURE, error: error.message });
    }
  };
};

export const registerUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: types.REGISTER_USER_REQUEST });

    try {
      const registeredUser = await AuthService.registerUser(userData);
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: registeredUser });
    } catch (error) {
      dispatch({ type: types.REGISTER_USER_FAILURE, error: error.message });
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN_USER_REQUEST });

    try {
      const authenticatedUser = await AuthService.loginUser(userData);
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: authenticatedUser });
    } catch (error) {
      dispatch({ type: types.LOGIN_USER_FAILURE, error: error.message });
    }
  };
};

// userActions.js
import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  LOAD_USER_INFO,
  LOAD_USER_CHATS,
} from "../constants";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const loadUserInfo = (userId) => ({
  type: LOAD_USER_INFO,
  payload: userId,
});

export const loadUserChats = (userId) => ({
  type: LOAD_USER_CHATS,
  payload: userId,
});

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};

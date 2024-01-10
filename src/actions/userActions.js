// actions/userActions.js

import { ADD_USER } from "../app/constants";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

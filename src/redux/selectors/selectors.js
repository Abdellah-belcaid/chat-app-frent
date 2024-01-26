// selectors.js

import { createSelector } from "reselect";

// selector functions
const selectAppState = (state) => state.app;
const selectUsers = (state) => state.users;
const selectMessages = (state) => state.messages;

// Memoized selector using reselect
export const selectCurrentUser = createSelector(
  [selectAppState],
  (appState) => appState.currentUser
);

// Select online users based on status
export const selectOnlineUsers = createSelector([selectUsers], (users) =>
  users.filter((user) => user.status === "ONLINE")
);

// Select users other than the current user
export const selectOtherUsers = createSelector(
  [selectUsers, selectCurrentUser],
  (usersState, currentUser) =>
    usersState.users.filter((user) => user.id !== currentUser.id)
);

// Select all users
export const selectAllUsers = createSelector(
  [selectUsers],
  (users) => users.users
);

// Select all messages
export const selectAllMessages = createSelector(
  [selectMessages],
  (messages) => messages.messages
);

// Add more selectors as needed

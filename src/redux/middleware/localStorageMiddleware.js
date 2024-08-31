const localStorageMiddleware = (store) => (next) => (action) => {
  // Call the next middleware in the chain or the reducer function
  const result = next(action);
  console.log("this is method to store : ", store.getState());

  // Check if the action is related to login or logout
  if (action.type === "LOGIN_USER_SUCCESS") {
    // Save the current user to local storage
    localStorage.setItem(
      "currentUser",
      JSON.stringify(store.getState().users.currentUser)
    );
  } else if (action.type === "LOGOUT_USER") {
    // Remove the current user from local storage
    localStorage.removeItem("currentUser");
  }

  return result;
};

export default localStorageMiddleware;

// try {
//   const stateToPersist = {
//     messages: store.getState().messages,
//     chats: store.getState().chats,
//     users: store.getState().users,
//     app: store.getState().app,
//   };

//   localStorage.setItem("reduxState", JSON.stringify(stateToPersist));
// } catch (error) {
//   console.error("Error saving state to localStorage:", error);
// }

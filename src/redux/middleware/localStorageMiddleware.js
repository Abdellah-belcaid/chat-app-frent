const localStorageMiddleware = (store) => (next) => (action) => {
  console.log("this is method to store : ", store.getState());
  const result = next(action);

  try {
    const stateToPersist = {
      messages: store.getState().messages,
      chats: store.getState().chats,
      users: store.getState().users,
      app: store.getState().app,
    };

    localStorage.setItem("reduxState", JSON.stringify(stateToPersist));
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }

  return result;
};

export default localStorageMiddleware;

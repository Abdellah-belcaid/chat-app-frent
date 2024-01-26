// In your Redux reducer
import { users } from "../../data/testData2";
const initialState = {
  currentUser: users[0],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;

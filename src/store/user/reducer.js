import { initialState } from "./states";

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER": {
      return Object.assign({}, state, {
        username: action.data
      });
    }
    default:
      return state;
  }
};

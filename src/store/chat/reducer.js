import { initialState } from "./states";

export const chat = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CHAT_HISTORY": {
      return Object.assign({}, state, {
        chatHistory: action.reset ? [] : [...state.chatHistory, action.data]
      });
    }
    default:
      return state;
  }
};

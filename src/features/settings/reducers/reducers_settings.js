import { TOGGLE_DARK_MODE } from "../actions/actions_settings";

export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      return state;
  }
};

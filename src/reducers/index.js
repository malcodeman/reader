import { combineReducers } from "redux";

const initialState = {
  active: "reddit",
  loading: true,
  posts: ["first", "second"]
};

const activeLink = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_LINK":
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ activeLink });

export default rootReducer;

import { combineReducers } from "redux";

const initialState = {
  active: "reddit",
  loading: true,
  posts: [
      "first",
      "second"
  ]
};

const activeLink = (state = initialState, action) => {
  return state;
};

const rootReducer = combineReducers({ activeLink });

export default rootReducer;

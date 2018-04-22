import { CHANGE_SOURCE, RECIVE_POSTS } from "../actions/actions_news";

const initialState = {
  source: "",
  loading: true,
  posts: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_SOURCE:
      return {
        ...state,
        source: action.payload
      };
    case RECIVE_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    default:
      return state;
  }
};

import {
  CHANGE_SOURCE,
  REQUEST_POSTS,
  RECIVE_POSTS
} from "../actions/actions_news";

const initialState = {
  source: "reddit",
  loading: true,
  posts: ["first", "second"]
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

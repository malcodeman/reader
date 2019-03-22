import {
  CHANGE_SOURCE,
  REQUEST_POPULAR_POSTS,
  RECIVE_POSTS,
  REQUEST_BEST_STORIES
} from "../actions/actions_news";

const initialState = {
  source: "",
  loading: false,
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
    case REQUEST_POPULAR_POSTS:
      return {
        ...state,
        loading: true
      };
    case REQUEST_BEST_STORIES:
      return {
        ...state,
        loading: true
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

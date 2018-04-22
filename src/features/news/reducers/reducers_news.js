import {
  CHANGE_SOURCE,
  REQUEST_POSTS,
  RECIVE_POSTS
} from "../actions/actions_news";
import {
  REQUEST_BEST_STORIES,
  RECIVE_BEST_STORIES
} from "../actions/actions_hacker_news";

const initialState = {
  source: "All in one",
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
    case REQUEST_POSTS:
      return {
        ...state,
        loading: true
      };
    case RECIVE_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload.map((post, index) => {
          return {
            id: action.payload[index].data.id,
            url: action.payload[index].data.url,
            title: action.payload[index].data.title,
            upvotes: action.payload[index].data.score,
            author: action.payload[index].data.author,
            comments: action.payload[index].data.num_comments
          };
        })
      };
    case REQUEST_BEST_STORIES:
      return {
        ...state,
        loading: true
      };
    case RECIVE_BEST_STORIES:
      return {
        ...state,
        loading: false,
        posts: action.payload.map((post, index) => {
          return {
            id: action.payload[index].id,
            url: action.payload[index].url,
            title: action.payload[index].title,
            upvotes: action.payload[index].score,
            author: action.payload[index].by,
            comments: action.payload[index].descendants
          };
        })
      };
    default:
      return state;
  }
};

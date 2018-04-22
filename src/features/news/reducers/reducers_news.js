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
    default:
      return state;
  }
};

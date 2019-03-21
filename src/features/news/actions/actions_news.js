export const CHANGE_SOURCE = "CHANGE_SOURCE";
export const REQUEST_POPULAR_POSTS = "REQUEST_POPULAR_POSTS";
export const REQUEST_BEST_STORIES = "REQUEST_BEST_STORIES";
export const RECIVE_POSTS = "RECIVE_POSTS";
export const REQUEST_POSTS_FAILED = "REQUEST_POSTS_FAILED";

export const changeSource = newSource => {
  return {
    type: CHANGE_SOURCE,
    payload: newSource
  };
};

export const requestPopularPosts = () => {
  return {
    type: REQUEST_POPULAR_POSTS
  };
};

export const requestBestStories = () => {
  return {
    type: REQUEST_BEST_STORIES
  };
};

export const REQUEST_POSTS = "REQUEST_POSTS";
export const REQUEST_POSTS_FAILED = "REQUEST_POSTS_FAILED";
export const RECIVE_POSTS = "RECIVE_POSTS";
export const CHANGE_SOURCE = "CHANGE_SOURCE";

export const changeSource = newSource => {
  return {
    type: CHANGE_SOURCE,
    payload: newSource
  };
};

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  };
};

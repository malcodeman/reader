export const changeActiveLink = link => {
  return {
    type: "CHANGE_ACTIVE_LINK",
    payload: link
  };
};

export const requestPosts = () => {
  return {
    type: "REQUEST_POSTS"
  };
};

export const recivePosts = posts => {
  return {
    type: "RECIVE_POSTS",
    payload: posts
  };
};

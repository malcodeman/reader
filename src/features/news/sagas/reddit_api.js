import axios from "axios";

export const getPopularPosts = () => {
  return axios.get("https://www.reddit.com/r/popular.json").then(res => {
    return res.data.data.children;
  });
};

import axios from "axios";

export const getBestStories = () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/beststories.json")
    .then(res => {
      return res.data;
    });
};

export const getItem = id => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(res => {
      return res.data;
    });
};

import axios from "axios";

export default () => {
  return axios
    .get("https://www.reddit.com/r/popular.json")
    .then(res => {
      return res.data.data.children;
    })
    .catch(err => console.log(err));
};

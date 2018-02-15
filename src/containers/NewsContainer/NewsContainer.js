import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";

class NewsContainer extends Component {
  state = { posts: [] };
  componentDidMount = () => {
    axios
      .get("https://www.reddit.com/r/popular.json")
      .then(res => this.setState({ posts: res.data.data.children }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        {this.state.posts.map(post => <Post title={post.data.title} />)}
      </div>
    );
  }
}

export default NewsContainer;

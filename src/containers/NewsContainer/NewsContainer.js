import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";
import Header from "./components/Header";
import styled from "styled-components";
import { color } from "styles/constants";

const Loading = styled.span`
  padding: 1rem;
  color: ${color.secondary};
  text-align: center;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListeItem = styled.li`
  padding: 1rem;
  :hover {
    background-color: #eee;
  }
`;

class NewsContainer extends Component {
  state = {
    posts: [],
    loadingPosts: true
  };
  componentDidMount = () => {
    axios
      .get("https://www.reddit.com/r/popular.json")
      .then(res => {
        this.setState({ posts: res.data.data.children, loadingPosts: false });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <Header title="Reddit" />
        {this.state.loadingPosts ? (
          <Loading>Loading...</Loading>
        ) : (
          <List>
            {this.state.posts.map(post => (
              <ListeItem key={post.data.id}>
                <Post
                  url={post.data.url}
                  title={post.data.title}
                  upvotes={post.data.ups}
                  author={post.data.author}
                  comments={post.data.num_comments}
                />
              </ListeItem>
            ))}
          </List>
        )}
      </React.Fragment>
    );
  }
}

export default NewsContainer;

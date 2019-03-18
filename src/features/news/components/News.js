import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Post from "./Post";
import Header from "./Header";
import { requestPosts } from "../actions/actions_news";

const NewsArea = styled.main`
  grid-area: m;
  background-color: transparent;
  @media (min-width: 576px) {
    padding: 2rem;
    overflow-y: scroll;
  }
`;

const Loading = styled.span`
  padding: 1rem;
  color: ${props => props.theme.secondary};
  display: block;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 1rem;
  :hover {
    background-color: #eee;
  }
`;

class News extends Component {
  componentDidMount = () => {
    this.props.requestPosts();
  };
  render() {
    return (
      <NewsArea>
        <Header title={this.props.source} />
        {this.props.loading ? (
          <Loading>Loading...</Loading>
        ) : (
          <List>
            {this.props.posts.map(post => (
              <ListItem key={post.id}>
                <Post
                  url={post.url}
                  title={post.title}
                  upvotes={post.upvotes}
                  author={post.author}
                  comments={post.comments}
                />
              </ListItem>
            ))}
          </List>
        )}
      </NewsArea>
    );
  }
}

const mapStateToProps = state => {
  return {
    source: state.news.source,
    loading: state.news.loading,
    posts: state.news.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPosts: () => dispatch(requestPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

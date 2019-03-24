import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../components/Header";
import Loading from "../components/Loading";
import Post from "../components/Post";
import { changeSource, requestAllPosts } from "../actions/actions_news";

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 1rem;
  :hover {
    background-color: #eee;
  }
`;

class Home extends Component {
  componentDidMount = () => {
    const { changeSource, requestAllPosts } = this.props;

    changeSource("All in one");
    requestAllPosts();
  };

  render() {
    const { source, loading, posts } = this.props;

    return (
      <>
        <Header title={source} />
        {loading ? (
          <Loading>Loading...</Loading>
        ) : (
          <List>
            {posts.map(post => (
              <ListItem key={post.id}>
                <Post
                  url={post.url}
                  title={post.title}
                  upvotes={post.upvotes}
                  author={post.author}
                  comments={post.comments}
                  source={post.source}
                />
              </ListItem>
            ))}
          </List>
        )}
      </>
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
    changeSource: source => dispatch(changeSource(source)),
    requestAllPosts: () => dispatch(requestAllPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

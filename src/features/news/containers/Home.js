import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../components/Header";
import Loading from "../components/Loading";
import Post from "../components/Post";
import { changeSource, requestPopularPosts } from "../actions/actions_news";

export const List = styled.ul`
  padding: 0;
  margin: 0;
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
    const { changeSource, requestPopularPosts } = this.props;

    changeSource("All in one");
    requestPopularPosts();
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
    requestPopularPosts: () => dispatch(requestPopularPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

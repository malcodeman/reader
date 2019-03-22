import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Loading from "../components/Loading";
import Post from "../components/Post";
import { List, ListItem } from "./Home";
import { changeSource, requestBestStories } from "../actions/actions_news";

class HackerNews extends React.Component {
  componentDidMount = () => {
    const { changeSource, requestBestStories } = this.props;

    changeSource("hacker news");
    requestBestStories();
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
    requestBestStories: () => dispatch(requestBestStories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackerNews);

import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Post from "./Post";
import Header from "./Header";
import { color } from "../../../state/styles/constants";
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
  color: ${color.secondary};
  display: block;
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

class News extends Component {
  componentDidMount = () => {
    /* let postsArray = [];
    reddit()
      .then(res => {
        res.forEach(element => {
          let temp = {
            id: element.data.id, 
            title: element.data.title,
            url: element.data.url ,
            upvotes: element.data.ups,
            author: element.data.author,
            comments: element.data.num_comments
          };
          postsArray.push(temp);          
          this.setState({ posts: postsArray, loadingPosts: false });
        });
      })
    //this.setState({ posts: postsArray, loadingPosts: false });
      
    /*getBestStories().then(res => {
      res.slice(0, 125).forEach(element => {
        getItem(element).then(res => {
          console.log(res);
          let temp = {
            id: res.id,
            title: res.title,
            url: res.url,
            upvotes: res.score,
            author: res.by,
            comments: res.descendants
          };
          postsArray.push(temp);
          this.setState({ posts: postsArray, loadingPosts: false });
        });
      });
    });*/
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
              <ListeItem key={post.id}>
                <Post
                  url={post.url || post.data.url}
                  title={post.title || post.data.title}
                  upvotes={post.upvotes || post.data.score}
                  author={post.author || post.data.author}
                  comments={post.comments || post.data.num_comments}
                />
              </ListeItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(News);

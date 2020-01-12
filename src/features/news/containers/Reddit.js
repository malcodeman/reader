import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Loading from "../components/Loading";
import Post from "../components/Post";
import { List, ListItem } from "./Home";
import { changeSource, requestPopularPosts } from "../actions/actions_news";

function Reddit() {
  const source = useSelector(state => state.news.source);
  const loading = useSelector(state => state.news.loading);
  const posts = useSelector(state => state.news.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeSource("reddit"));
    dispatch(requestPopularPosts());
  }, [dispatch]);

  return (
    <>
      <Header title={source} />
      {loading && <Loading>Loading...</Loading>}
      {!loading && posts && (
        <List>
          {posts.map(post => (
            <ListItem key={post.id}>
              <Post
                url={post.url}
                title={post.title}
                upvotes={post.upvotes}
                author={post.author}
                comments={post.comments}
                created_at={post.created_at}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default Reddit;

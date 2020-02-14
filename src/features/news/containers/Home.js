import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

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
    background-color: ${props => props.theme.backgroundPrimary};
  }
`;

function Home() {
  const source = useSelector(state => state.news.source);
  const loading = useSelector(state => state.news.loading);
  const posts = useSelector(state => state.news.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeSource("All in one"));
    dispatch(requestAllPosts());
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
                source={post.source}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default Home;

import { call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_POPULAR_POSTS,
  RECIVE_POSTS,
  REQUEST_POSTS_FAILED
} from "../../actions/actions_news";

export async function fetchPopularPostsApi() {
  const res = await fetch("https://www.reddit.com/r/popular.json");
  const json = await res.json();

  return json.data.children;
}

export function formatPosts(posts) {
  return posts.map(post => {
    return {
      id: post.data.id,
      url: post.data.url,
      title: post.data.title,
      upvotes: post.data.score,
      author: post.data.author,
      comments: post.data.num_comments,
      source: "reddit"
    };
  });
}

function* fetchPopularPosts() {
  try {
    const posts = yield call(fetchPopularPostsApi);
    const postsFormatted = formatPosts(posts);

    yield put({ type: RECIVE_POSTS, payload: postsFormatted });
  } catch (error) {
    yield put({ type: REQUEST_POSTS_FAILED, error });
  }
}

export function* watchfetchPopularPosts() {
  yield takeLatest(REQUEST_POPULAR_POSTS, fetchPopularPosts);
}

import { call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_POSTS,
  REQUEST_POSTS_FAILED,
  RECIVE_POSTS
} from "../../actions/actions_news";

async function fetchPopularPostsApi() {
  const res = await fetch("https://www.reddit.com/r/popular.json");
  const json = await res.json();

  return json.data.children;
}

function* fetchPopularPosts() {
  try {
    const data = yield call(fetchPopularPostsApi);
    const posts = data.map(post => {
      return {
        id: post.data.id,
        url: post.data.url,
        title: post.data.title,
        upvotes: post.data.score,
        author: post.data.author,
        comments: post.data.num_comments
      };
    });

    yield put({ type: RECIVE_POSTS, payload: posts });
  } catch (error) {
    yield put({ type: REQUEST_POSTS_FAILED, error });
  }
}

export function* watchfetchPopularPosts() {
  yield takeLatest(REQUEST_POSTS, fetchPopularPosts);
}

import { call, all, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_ALL_POSTS,
  RECIVE_POSTS,
  REQUEST_POSTS_FAILED
} from "../../actions/actions_news";
import { fetchPopularPostsApi, formatPosts } from "../reddit/sagas_reddit";
import {
  fetchBestStoriesApi,
  fetchItemApi,
  formatStories
} from "../hackerNews/sagas_hacker_news";

function sortByDesc(posts) {
  return posts.sort((a, b) => {
    return b.upvotes - a.upvotes;
  });
}

function* fetchAllPosts() {
  try {
    const ids = yield call(fetchBestStoriesApi);
    const stories = yield all(
      ids.slice(0, 25).map(id => {
        return fetchItemApi(id);
      })
    );
    const storiesFormatted = formatStories(stories);
    const posts = yield call(fetchPopularPostsApi);
    const postsFormatted = formatPosts(posts);
    const postsAll = [...storiesFormatted, ...postsFormatted];
    const postsSorted = sortByDesc(postsAll);

    yield put({ type: RECIVE_POSTS, payload: postsSorted });
  } catch (error) {
    yield put({ type: REQUEST_POSTS_FAILED, error });
  }
}

export function* watchfetchAllPosts() {
  yield takeLatest(REQUEST_ALL_POSTS, fetchAllPosts);
}

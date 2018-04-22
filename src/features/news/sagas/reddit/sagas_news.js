import { call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_POSTS,
  REQUEST_POSTS_FAILED,
  RECIVE_POSTS
} from "../../actions/actions_news";
import { getPopularPosts } from "./reddit_api";

function* fetchPosts() {
  try {
    const data = yield call(getPopularPosts);
    yield put({ type: RECIVE_POSTS, payload: data });
  } catch (error) {
    yield put({ type: REQUEST_POSTS_FAILED, error });
  }
}

export function* watchfetchPosts() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
}

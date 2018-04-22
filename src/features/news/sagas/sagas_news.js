import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_POSTS, RECIVE_POSTS } from "../actions/actions_news";
import { getPopularPosts } from "./reddit_api";

function* fetchPosts() {
  const data = yield call(getPopularPosts);
  yield put({ type: RECIVE_POSTS, payload: data });
}

export function* watchfetchPosts() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
}

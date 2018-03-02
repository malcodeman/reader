import { call, put, all, takeLatest } from "redux-saga/effects";

import reddit from "../services/reddit";

export function* fetchPosts() {
  const data = yield call(reddit);
  yield put({ type: "RECIVE_POSTS", payload: data });
}

export function* watchfetchPosts() {
  yield takeLatest("REQUEST_POSTS", fetchPosts);
}
export default function* rootSaga() {
  yield all([fetchPosts(), watchfetchPosts()]);
}

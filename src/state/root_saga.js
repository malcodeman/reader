import { all } from "redux-saga/effects";

import { watchfetchPosts } from "../features/news/sagas/sagas_news";

export default function* rootSaga() {
  yield all([watchfetchPosts()]);
}

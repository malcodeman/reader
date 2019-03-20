import { all } from "redux-saga/effects";

import { watchfetchPopularPosts } from "../features/news/sagas/reddit/sagas_reddit";
import { watchfetchBestStories } from "../features/news/sagas/hackerNews/sagas_hacker_news";

export default function* rootSaga() {
  yield all([watchfetchPopularPosts(), watchfetchBestStories()]);
}

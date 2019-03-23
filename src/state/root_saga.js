import { all } from "redux-saga/effects";

import { watchfetchAllPosts } from "../features/news/sagas/home/sagas_home";
import { watchfetchPopularPosts } from "../features/news/sagas/reddit/sagas_reddit";
import { watchfetchBestStories } from "../features/news/sagas/hackerNews/sagas_hacker_news";

export default function* rootSaga() {
  yield all([
    watchfetchAllPosts(),
    watchfetchPopularPosts(),
    watchfetchBestStories()
  ]);
}

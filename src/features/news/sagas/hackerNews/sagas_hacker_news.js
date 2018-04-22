import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  REQUEST_BEST_STORIES,
  REQUEST_BEST_STORIES_FAILED,
  RECIVE_BEST_STORIES
} from "../../actions/actions_hacker_news";
import { getBestStories, getItem } from "./hacker_news_api";

function* fetchBestStories() {
  try {
    const data = yield call(getBestStories);
    const storiesData = yield all(
      data.slice(0, 25).map((story, index) => {
        return getItem(data[index]);
      })
    );
    let posts = [];
    storiesData.map(data => posts.push(data));
    yield put({ type: RECIVE_BEST_STORIES, payload: posts });
  } catch (error) {
    yield put({ type: REQUEST_BEST_STORIES_FAILED, error });
  }
}

export function* watchfetchBestStories() {
  yield takeLatest(REQUEST_BEST_STORIES, fetchBestStories);
}

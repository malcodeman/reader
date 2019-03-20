import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  REQUEST_BEST_STORIES,
  REQUEST_BEST_STORIES_FAILED,
  RECIVE_BEST_STORIES
} from "../../actions/actions_hacker_news";

async function fetchBestStoriesApi() {
  const stories = await fetch(
    "https://hacker-news.firebaseio.com/v0/beststories.json"
  );

  return await stories.json();
}

async function fetchItemApi(id) {
  const item = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  return await item.json();
}

function* fetchBestStories() {
  try {
    const ids = yield call(fetchBestStoriesApi);
    const stories = yield all(
      ids.slice(0, 25).map(id => {
        return fetchItemApi(id);
      })
    );
    const storiesFormatted = stories.map(story => {
      return {
        id: story.id,
        url: story.url,
        title: story.title,
        upvotes: story.score,
        author: story.by,
        comments: story.descendants
      };
    });

    yield put({ type: RECIVE_BEST_STORIES, payload: storiesFormatted });
  } catch (error) {
    yield put({ type: REQUEST_BEST_STORIES_FAILED, error });
  }
}

export function* watchfetchBestStories() {
  yield takeLatest(REQUEST_BEST_STORIES, fetchBestStories);
}

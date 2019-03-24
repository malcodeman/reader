import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  REQUEST_BEST_STORIES,
  RECIVE_POSTS,
  REQUEST_POSTS_FAILED
} from "../../actions/actions_news";

export async function fetchBestStoriesApi() {
  const stories = await fetch(
    "https://hacker-news.firebaseio.com/v0/beststories.json"
  );

  return await stories.json();
}

export async function fetchItemApi(id) {
  const item = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  return await item.json();
}

export function formatStories(stories) {
  return stories.map(story => {
    return {
      id: story.id,
      url: story.url,
      title: story.title,
      upvotes: story.score,
      author: story.by,
      comments: story.descendants,
      created_at: new Date(story.time * 1000),
      source: "hacker news"
    };
  });
}

function* fetchBestStories() {
  try {
    const ids = yield call(fetchBestStoriesApi);
    const stories = yield all(
      ids.slice(0, 25).map(id => {
        return fetchItemApi(id);
      })
    );
    const storiesFormatted = formatStories(stories);

    yield put({ type: RECIVE_POSTS, payload: storiesFormatted });
  } catch (error) {
    yield put({ type: REQUEST_POSTS_FAILED, error });
  }
}

export function* watchfetchBestStories() {
  yield takeLatest(REQUEST_BEST_STORIES, fetchBestStories);
}

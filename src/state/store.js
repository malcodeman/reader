import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root_reducer";
import rootSaga from "./root_saga";
import { loadState, saveState } from "./local_storage";

const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  saveState({
    settings: store.getState().settings
  });
});

sagaMiddleware.run(rootSaga);

export default store;

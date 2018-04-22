import { combineReducers } from "redux";

import news from "../features/news/reducers/reducers_news";

const rootReducer = combineReducers({ news });

export default rootReducer;

import { combineReducers } from "redux";

import news from "../features/news/reducers/reducers_news";
import settings from "../features/settings/reducers/reducers_settings";

const rootReducer = combineReducers({ news, settings });

export default rootReducer;

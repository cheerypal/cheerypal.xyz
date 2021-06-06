// necessary imports //

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers //
import workReducer from "./work";
import projectReducer from "./projects";
import matesReducer from "./mates";
import socialReducer from "./social";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  work: workReducer,
  projects: projectReducer,
  mates: matesReducer,
  social: socialReducer,
});

export default persistReducer(persistConfig, rootReducer);

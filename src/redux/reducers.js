import { combineReducers } from "redux";
import authUser from "./auth/reducer";

import settings from "./settings/reducer";
import menu from "./menu/reducer";

import countryApp from "./country/reducer";

const reducers = combineReducers({
  authUser,
  menu,
  settings,
  countryApp,
});

export default reducers;

import { combineReducers } from "redux";
import authUser from "./auth/reducer";

import settings from "./settings/reducer";
import menu from "./menu/reducer";

import countryApp from "./country/reducer";
import cityApp from "./city/reducer";
import religionApp from "./religion/reducer";

import evaluationcompentenciesApp from "./evaluationcompentencies/reducer";
import educationTrainingTypeApp from "./educationtrainingtype/reducer";
// import documenttypeApp from "./documenttype/reducer";
const reducers = combineReducers({
  authUser,
  menu,
  settings,
  countryApp,
  cityApp,
  religionApp,
  evaluationcompentenciesApp,
  educationTrainingTypeApp,
  // documenttypeApp,
});

export default reducers;

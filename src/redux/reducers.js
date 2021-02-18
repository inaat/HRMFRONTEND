import { combineReducers } from "redux";
import authUser from "./auth/reducer";

import settings from "./settings/reducer";
import menu from "./menu/reducer";


import religionApp from "./religion/reducer";
import deductionApp from "./deduction/reducer";
import modificationtypeApp from "./modification_type/reducer";
import currenciestypeApp from "./currencies_type/reducer";
import sectionApp from "./section/reducer";
import costcenterApp from "./costcenter/reducer";
import percentageApp from "./percentage/reducer";

// import documenttypeApp from "./documenttype/reducer";
const reducers = combineReducers({
  authUser,
  menu,
  settings,
  religionApp,
  deductionApp,
  modificationtypeApp,
  currenciestypeApp,
  sectionApp,
  costcenterApp,
  percentageApp,

  // documenttypeApp,
});

export default reducers;

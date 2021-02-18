import { all } from "redux-saga/effects";

import authSagas from "./auth/saga";

import religionSagas from "./religion/saga";
import deductionSagas from "./deduction/saga";
import modificationtypeSagas from "./modification_type/saga";
import currenciestypeSagas from "./currencies_type/saga";
import sectionSagas from "./section/saga";
import costcenterSagas from "./costcenter/saga";
import percentageSagas from "./percentage/saga";

// import documenttypeSagas from "./documenttype/saga";
//     documenttypeSagas(),
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    religionSagas(),
    deductionSagas(),
    modificationtypeSagas(),
    currenciestypeSagas(),
    sectionSagas(),
    costcenterSagas(),
    percentageSagas(),

  ]);
}

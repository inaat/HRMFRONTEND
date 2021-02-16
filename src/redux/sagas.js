import { all } from "redux-saga/effects";
import countrySagas from "./country/saga";
import authSagas from "./auth/saga";
import citySagas from "./city/saga";
import religionSagas from "./religion/saga";
import evaluationcompentenciesSagas from "./evaluationcompentencies/saga";
import educationTrainingTypeSagas from "./educationtrainingtype/saga";
// import documenttypeSagas from "./documenttype/saga";
//     documenttypeSagas(),
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    countrySagas(),
    citySagas(),
    religionSagas(),
    evaluationcompentenciesSagas(),
    educationTrainingTypeSagas(),
  ]);
}

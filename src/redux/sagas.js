import { all } from "redux-saga/effects";
import countrySagas from "./country/saga";
import authSagas from "./auth/saga";
import citySagas from "./city/saga";

export default function* rootSaga(getState) {
  yield all([authSagas(), countrySagas(), citySagas()]);
}

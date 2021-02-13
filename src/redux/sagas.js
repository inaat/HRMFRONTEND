import { all } from "redux-saga/effects";
import todoSagas from "./country/saga";
import authSagas from "./auth/saga";

export default function* rootSaga(getState) {
  yield all([authSagas(), todoSagas()]);
}

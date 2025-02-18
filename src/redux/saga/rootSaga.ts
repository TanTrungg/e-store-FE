import { all } from "redux-saga/effects";

import * as userSaga from "./userSaga/userSaga";

export function* rootSaga() {
  yield all([
    userSaga.lookUpUser(),
  ]);
}

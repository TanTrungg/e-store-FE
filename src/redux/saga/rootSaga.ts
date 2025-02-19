import { all } from "redux-saga/effects";

import * as userSaga from "./userSaga/userSaga";
import * as authSaga from "./authSaga/authSaga";

export function* rootSaga() {
  yield all([
    userSaga.lookUpUser(),
    authSaga.lookUpAuth(),
  ]);
}

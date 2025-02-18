import {
  CreateUserFail,
  CreateUserSuccess,
  GetAllUsersFail,
  GetAllUsersSuccess,
} from "@/redux/actions/userAction";
import { USER } from "@/redux/constant/constant";
import { userService } from "@/services/userService";
import {
  showErrorAlert,
  showSuccessAlert,
  showWarningAlert,
} from "@/toastify/toastify";
import { RegisterState } from "@/types/auth/AuthTypes";
import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

function* GetAllUserSaga(payload: { type: string }) {
  try {
    console.log("payload", payload.type);
    const res: AxiosResponse = yield call(userService.getUsers);
    const { status, data } = res;
    if (data && status === 200) {
      yield put(GetAllUsersSuccess(data));
    }
  } catch (error: any) {
    let errorMessage: string = error;
    console.error("GET-USERs-ERROR", errorMessage);
    if (error.response) {
      errorMessage = error.response.data.Message;
      console.log("e", errorMessage);
      showWarningAlert(errorMessage);
    } else {
      errorMessage = error.message;
      showErrorAlert(errorMessage);
    }
    yield put(GetAllUsersFail(errorMessage));
  }
}

function* CreateUserSaga(payload: { type: string; data: RegisterState }) {
  try {
    // const data = payload.data
    const res: AxiosResponse = yield call(userService.postUser, payload.data);
    const { status, data } = res;
    if (data && status === 201) {
      yield put(CreateUserSuccess(data));
      showSuccessAlert("Đăng ký thành công");
    }
  } catch (error: any) {
    let errorMessage: string = error;
    console.error("CREATE-USER-ERROR", errorMessage);
    if (error.response) {
      errorMessage = error.response.data.Message;
      console.log("e", errorMessage);
      showWarningAlert(errorMessage);
    } else {
      errorMessage = error.message;
      showErrorAlert(errorMessage);
    }
    yield put(CreateUserFail(errorMessage));
  }
}

export function* lookUpUser() {
  yield takeEvery(USER.GET_ALL_USER, GetAllUserSaga);
  yield takeEvery(USER.CREATE_USER, CreateUserSaga);
}

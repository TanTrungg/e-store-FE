import { LoginFail, LoginSuccess } from "@/redux/actions/authAction";
import { AUTH } from "@/redux/constant/constant";
import { authService } from "@/services/authService";
import { showErrorAlert, showWarningAlert } from "@/toastify/toastify";
import { LoginState } from "@/types/auth/AuthTypes";
import { AxiosResponse } from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";

function* LoginSaga(payload: { type: string; data: LoginState }) {
  try {
    const res: AxiosResponse = yield call(authService.postLogin, payload.data);
    const { status, data } = res;
    if (data && status === 201) {
      yield put(LoginSuccess(data));
      //Tạo và truyền navigate từ ngoài vào trong này để gọi tương tự như trong component
      const navigate: (path: string) => void = yield select(
        (state: any) => state.navigationReducer.navigate
      );
      if (navigate) {
        navigate("/home");
      }
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
    yield put(LoginFail(errorMessage));
  }
}

export function* lookUpAuth() {
  yield takeEvery(AUTH.LOGIN, LoginSaga);
}

import { AUTH } from "@/redux/constant/constant";
import { StoreAuth } from "@/types/auth/AuthTypes";

interface PayloadAuth {
  authInfo: null;
  error: null;
}

interface ActionAuth {
  type: string;
  payload: PayloadAuth;
}

const initialState: StoreAuth = {
  isLoading: false,
  isLogin: false,
  authInfo: null,
  showError: null,
};

const authReducer = (state: StoreAuth = initialState, action: ActionAuth) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        authInfo: null,
        showError: null,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        authInfo: action.payload.authInfo,
        showError: null,
      };
    case AUTH.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        authInfo: null,
        showError: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;

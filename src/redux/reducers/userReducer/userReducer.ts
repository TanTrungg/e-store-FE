import { USER } from "@/redux/constant/constant";
import { StoreUser } from "@/types/user/UserType";

interface PayloadUser {
  listUser: [];
  user: null;
  error: null;
}

const initialState: StoreUser = {
  listUser: [],
  user: null,
  showError: null,
};

const userReducer = (
  state: StoreUser = initialState,
  { type, payload }: { type: string; payload: PayloadUser }
) => {
  switch (type) {
    case USER.GET_ALL_USER:
      return {
        ...state,
      };
    case USER.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        listUser: payload.listUser,
        showError: null,
      };
    case USER.GET_ALL_USER_FAIL:
      return {
        ...state,
        listUser: null,
        showError: payload.error,
      };

    case USER.CREATE_USER:
      return {
        ...state,
      };
    case USER.CREATE_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        showError: null,
      };
    case USER.CREATE_USER_FAIL:
      return {
        ...state,
        user: null,
        showError: payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;

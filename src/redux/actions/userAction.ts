import { RegisterState } from "@/types/auth/AuthTypes";
import { USER } from "../constant/constant";
import { UserState } from "@/types/user/UserType";

// GET ALL USER
export const GetAllUsers = () => {
  return {
    type: USER.GET_ALL_USER,
  };
};
export const GetAllUsersSuccess = (listUser: UserState) => {
  return {
    type: USER.GET_ALL_USER_SUCCESS,
    payload: {
      listUser,
    },
  };
};
export const GetAllUsersFail = (error: string) => {
  return {
    type: USER.GET_ALL_USER_FAIL,
    payload: {
      error,
    },
  };
};

// CREATE USER
export const CreateUser = (data: RegisterState) => {
  return {
    type: USER.CREATE_USER,
    data,
  };
};
export const CreateUserSuccess = (user: UserState) => {
  return {
    type: USER.CREATE_USER_SUCCESS,
    payload: {
      user,
    },
  };
};
export const CreateUserFail = (error: string) => {
  return {
    type: USER.CREATE_USER_FAIL,
    payload: {
      error,
    },
  };
};

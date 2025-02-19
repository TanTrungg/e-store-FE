import { RoleState } from "../user/UserType";

export interface selectorAuth {
  authReducer: StoreAuth;
}

export interface StoreAuth {
  isLogin: boolean;
  isLoading: boolean;
  authInfo: AuthState | null;
  showError: string | null;
}

export interface AuthState {
  accessToken: string;
  account: AccountState;
}

export interface AccountState {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  avatarUrl: string;
  status: string;
  updateAt: Date;
  createAt: Date;
  role: RoleState;
}

export interface LoginState {
  email: string | null;
  password: string | null;
}

export interface RegisterState {
  email: string | null;
  password: string | null;
  fullName: string | null;
  phoneNumber: string | null;
}

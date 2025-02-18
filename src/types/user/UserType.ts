export interface selectorUser {
  userReducer: StoreUser;
}

export interface StoreUser {
  listUser: UserState[];
  user: UserState | null;
  showError: string | null;
}

export interface UserState {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  avatarUrl: string;
  status: string;
  updateAt: Date;
  createAt: Date;
  role: RoleState;
  address: string;
  cartId: string;
}

export interface RoleState {
  id: string;
  name: string;
  createAt: string;
}

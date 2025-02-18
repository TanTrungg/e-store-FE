export interface AuthState {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface LoginState{
  email: string | null,
  password: string | null
}

export interface RegisterState{
  email: string | null,
  password: string | null,
  fullName: string | null,
  phoneNumber: string | null
}

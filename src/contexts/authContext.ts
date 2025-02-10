import { AuthState } from "@/types/auth/AuthTypes";
import { createContext } from "react";

interface AuthContextType {
  user: AuthState | null;
  setUser: (user: AuthState | null) => void;
  logout: () => void;
}

//tạo context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

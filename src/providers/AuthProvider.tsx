import { AuthState } from "@/types/auth/AuthTypes";
import { ReactNode, useState, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthState | null>(null);

  //get user login by access token
  const getAuthUser = async () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("ACCESS-TOKEN:", accessToken);
    if (!accessToken) return;

    try {
      //service get user login by access-token
      // to-do service
    } catch (error) {
      console.log("Failed to get auth user: ", error);
      localStorage.removeItem("accessToken");
      setUser(null);
    }
  };

  //logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  //get user login when component mount
  useEffect(() => {
    getAuthUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

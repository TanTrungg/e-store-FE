import useAxios from "@/hooks/useAxios";
import { LoginState } from "@/types/auth/AuthTypes";

export class Private {
  postLogin = async (data: LoginState) => {
    const axiosPrivate = useAxios();
    return await axiosPrivate.post("/auth", data);
  };
  getUserLogin = async () => {
    const axiosPrivate = useAxios();
    return await axiosPrivate.get("/auth");
  };
}

export const authService = new Private();

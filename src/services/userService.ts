import useAxios from "@/hooks/useAxios";
import { RegisterState } from "@/types/auth/AuthTypes";

export class Private {
  getUsers = async () => {
    const axiosPrivate = useAxios();
    return await axiosPrivate.get("/users");
  };

  postUser = async (data: RegisterState) => {
    const axiosPrivate = useAxios();
    return await axiosPrivate.post("/users", data);
  };
}

export const userService = new Private();

import { GetAllUsers } from "@/redux/actions/userAction";
import { selectorUser, UserState } from "@/types/user/UserType";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);
  const listUser: UserState[] = useSelector(
    (state: selectorUser) => state.userReducer.listUser
  );
  console.log("listUser", listUser);

  return <div>HomePage</div>;
};

export default HomePage;

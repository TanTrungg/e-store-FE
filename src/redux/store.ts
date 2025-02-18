import createMiddleWareSaga from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { rootSaga } from "./saga/rootSaga";
import userReducer from "./reducers/userReducer/userReducer";

const middleSaga = createMiddleWareSaga();

const allReducer = combineReducers({
  userReducer,
});
const store = configureStore({
  reducer: allReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      middleSaga
    );
  },
});
middleSaga.run(rootSaga);
export default store;

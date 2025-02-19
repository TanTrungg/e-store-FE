import createMiddleWareSaga from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { rootSaga } from "./saga/rootSaga";
import userReducer from "./reducers/userReducer/userReducer";
import navigationReducer from "./reducers/navigationReducer/navigationReducer";

const middleSaga = createMiddleWareSaga();

const allReducer = combineReducers({
  navigationReducer,
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

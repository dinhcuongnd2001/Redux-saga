import { PayloadAction } from "@reduxjs/toolkit";
import { authActions, LoginPayload } from "./authSlice";
import { take, fork } from "redux-saga/effects";

function* handleLogin(payload: LoginPayload) {
  console.log("handle login ", payload);
}

function* handleLogout() {
  console.log("handle logout called");
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(
      authActions.login.type
    );

    console.log("action:: ", action);

    yield fork(handleLogin, action.payload);

    const action2: PayloadAction = yield take(authActions.logout.type);
    console.log("action:: ", action2);

    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}

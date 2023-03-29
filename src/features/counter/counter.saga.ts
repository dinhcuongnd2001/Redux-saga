import { PayloadAction } from "@reduxjs/toolkit";
import { delay, takeEvery, takeLatest, put } from "redux-saga/effects";
import { fetchCount } from "./counterAPI";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

// export function* log(action: PayloadAction) {
//   //   console.log("Log", action);
//   yield fetchCount();
//   console.log("called here");
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log("delay 1s");
  yield delay(1000);
  console.log("cancelled");
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log("counter saga");
  //   console.log(incrementSaga.toString());
  //   yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}

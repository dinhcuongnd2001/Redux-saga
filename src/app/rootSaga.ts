import { all } from "redux-saga/effects";
import counterSaga from "../features/counter/counter.saga";

function* helloSaga() {
  console.log("Hello saga");
  yield 1;
  console.log("2");
  yield 2;
  console.log("3");
  yield 3;
}

export default function* rootSaga() {
  console.log("root saga");
  yield all([helloSaga(), counterSaga()]);
}

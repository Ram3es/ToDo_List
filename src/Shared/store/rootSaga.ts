import { fork, all } from "redux-saga/effects";
import { todosSagaWatcher, userSagasWatcher } from "@containers/";

const allsaga = [
  todosSagaWatcher,
  // userSagasWatcher
];

export default function* rootSaga() {
  yield all(allsaga.map(fork));
}

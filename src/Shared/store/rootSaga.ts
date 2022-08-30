import { fork, all } from "redux-saga/effects";
import { todosSagaWatcher, userSagasWatcher, authSagaWorker } from "@containers/";

const allsaga = [todosSagaWatcher, userSagasWatcher, authSagaWorker];

export default function* rootSaga() {
  yield all(allsaga.map(fork));
}

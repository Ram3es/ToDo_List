import { takeLatest, call, put } from "redux-saga/effects";
import { authConstants, authAction } from "@containers/";
import axios from "axios";

function* signInSaga() {
  try {
    //const data :{ token, user } //= yield call(()=> axios.post(URL,payload))
    yield put(authAction.SIGN_IN.SUCCESS());
  } catch (e) {
    yield put(authAction.SIGN_IN.FAILURE(e as Object));
  }
}

function* authSagaWorker() {
  yield takeLatest(authConstants.SIGN_IN.REQUEST, signInSaga);
}

import { takeLatest, call, put } from "redux-saga/effects";
import { userActions, IUser } from "@containers/";
import axios from "axios";

function* fetchUsersSaga() {
  try {
    //const users:IUser[] = yield call(axios.get("URL"))

    yield put(userActions.FETCH_USERS.SUCCESS());
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
  }
}

export const userSagasWatcher = function* () {
  yield takeLatest(userActions.FETCH_USERS.REQUEST, fetchUsersSaga);
};

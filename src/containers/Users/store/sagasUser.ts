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
function* fetchUserSaga({ payload, cb }: ReturnType<typeof userActions.FETCH_USER.REQUEST>) {
  try {
    //const user:IUser = yield call(axios.get(`/users/${payload.id}`))
    yield put(userActions.FETCH_USER.SUCCESS());
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
  }
}
function* addUserSaga({ payload }: ReturnType<typeof userActions.ADD_USER.REQUEST>) {
  try {
    //const newUser: IUser = yield call(axios.post(`/users`, payload))
    yield put(userActions.ADD_USER.SUCCESS());
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
  }
}
function* editUserSaga({ payload }: ReturnType<typeof userActions.EDIT_USER.REQUEST>) {
  try {
    const { id, ...rest } = payload;
    //const updatedUser: IUser = yield call(axios.put(`/users/${id}`, rest))
    yield put(userActions.EDIT_USER.SUCCESS());
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
  }
}
function* removeUserSaga({ payload }: ReturnType<typeof userActions.REMOVE_USER.REQUEST>) {
  try {
    //const removeUsersId = yield call(axios.delete(`/users/${payload.id}`))
    yield put(userActions.REMOVE_USER.SUCCESS());
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
  }
}
function* filtersUserSaga() {}

export const userSagasWatcher = function* () {
  yield takeLatest(userActions.FETCH_USERS.REQUEST, fetchUsersSaga);
  yield takeLatest(userActions.FETCH_USER.REQUEST, fetchUserSaga);
  yield takeLatest(userActions.ADD_USER.REQUEST, addUserSaga);
  yield takeLatest(userActions.EDIT_USER.REQUEST, editUserSaga);
  yield takeLatest(userActions.REMOVE_USER.REQUEST, removeUserSaga);
  yield takeLatest(userActions.FILTERS_USER.REQUEST, filtersUserSaga);
};

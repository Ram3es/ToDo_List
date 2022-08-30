import { takeLatest, call, put } from "redux-saga/effects";
import { userConstType, userActions, IUser } from "@containers/";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/users",
});

function* fetchUsersSaga({ payload, cb }: ReturnType<typeof userActions.FETCH_USERS.REQUEST>) {
  try {
    const { data }: { data: IUser[] } = yield call(() => api.get(""));
    yield put(userActions.FETCH_USERS.SUCCESS(data));
  } catch (e) {
    yield put(userActions.FETCH_USERS.FAILURE(e as Object));
  }
}
function* fetchUserSaga({ payload, cb }: ReturnType<typeof userActions.FETCH_USER.REQUEST>) {
  try {
    const { data }: { data: IUser } = yield call(() => api.get(`/${payload}`));
    yield put(userActions.FETCH_USER.SUCCESS(data));
  } catch (e) {
    yield put(userActions.FETCH_USER.FAILURE(e as Object));
  }
}
function* addUserSaga({ payload }: ReturnType<typeof userActions.ADD_USER.REQUEST>) {
  try {
    const { data }: { data: IUser } = yield call(() => api.post(``, payload));

    yield put(userActions.ADD_USER.SUCCESS(data));
  } catch (e) {
    yield put(userActions.ADD_USER.FAILURE(e as Object));
  }
}
function* editUserSaga({ payload }: ReturnType<typeof userActions.EDIT_USER.REQUEST>) {
  try {
    const { id, ...rest } = payload;
    //const updatedUser: IUser = yield call(axios.put(`/users/${id}`, rest))
    const editedUser = [
      {
        id: 4,
        f_name: "JOHN",
        l_name: "Travolta",
        email: "jonnh@jonh",
        createdAt: new Date(),
        is_active: false,
        avatar: null,
      },
    ];
    yield put(userActions.EDIT_USER.SUCCESS(editedUser));
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
  }
}
function* removeUserSaga({ payload }: ReturnType<typeof userActions.REMOVE_USER.REQUEST>) {
  try {
    //const removeUsersId = yield call(axios.delete(`/users/${payload.id}`))
    const removeUser = 4;
    yield put(userActions.REMOVE_USER.SUCCESS(removeUser));
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
  }
}

export const userSagasWatcher = function* () {
  yield takeLatest(userConstType.FETCH_USERS.REQUEST, fetchUsersSaga);
  yield takeLatest(userConstType.FETCH_USER.REQUEST, fetchUserSaga);
  yield takeLatest(userConstType.ADD_USER.REQUEST, addUserSaga);
  yield takeLatest(userConstType.EDIT_USER.REQUEST, editUserSaga);
  yield takeLatest(userConstType.REMOVE_USER.REQUEST, removeUserSaga);
};

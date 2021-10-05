import { takeLatest, call, put } from "redux-saga/effects";
import { userConstType, userActions, IUser } from "@containers/";
import axios from "axios";

function* fetchUsersSaga() {
  try {
    // const users:IUser[] = yield call(axios.get("URL"))

    const user = [
      {
        id: 3,
        f_name: "JOHN",
        l_name: "Travolta",
        email: "jonnh@jonh",
        createdAt: new Date(),
        is_active: false,
        avatar: null,
      },
    ];

    yield put(userActions.FETCH_USERS.SUCCESS(user));
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
    const newUser = [
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

    yield put(userActions.ADD_USER.SUCCESS(newUser));
  } catch (e) {
    userActions.FETCH_USERS.FAILURE(e as Object);
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
    const removeUser = 4
    yield put(userActions.REMOVE_USER.SUCCESS(removeUser ));
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

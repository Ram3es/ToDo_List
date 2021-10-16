import { takeLatest, call, put } from "redux-saga/effects";
import { authConstants, authAction } from "@containers/";
import axios from "axios";
import jwt from "jsonwebtoken";
import { decodedTextSpanIntersectsWith } from "typescript";

function* signInSaga({ payload, cb }: ReturnType<typeof authAction.SIGN_IN.REQUEST>) {
  try {
    // const { email, password } = payload
    //const { token } //= yield call(()=> axios.post(URL,payload))
    // const { user} = jwt.verify(token, 'shhhhh', function(err, decoded) {
    //   return decoded.user}
    console.log(payload, "sagas");
    const token = "wfhwkjhf33333ihehfhege33333HSDJHGFJFJS";
    localStorage.setItem("token", token);

    yield put(authAction.SIGN_IN.SUCCESS({ token }));
  } catch (e) {
    yield put(authAction.SIGN_IN.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* signUpSaga({ payload, cb }: ReturnType<typeof authAction.SIGN_UP.REQUEST>) {
  try {
    // yield call (() => axios.post(URL, payload))
    yield put(authAction.SIGN_UP.SUCCESS());
  } catch (e) {
    yield put(authAction.SIGN_UP.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* resetPasswordSaga({ payload, cb }: ReturnType<typeof authAction.RESET_PASSWORD.REQUEST>) {
  try {
    //  yield call(()=> axios.post(URL, payload))
    yield put(authAction.RESET_PASSWORD.SUCCESS());
  } catch (e) {
    yield put(authAction.RESET_PASSWORD.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* forgotPasswordSaga({ payload, cb }: ReturnType<typeof authAction.FORGOT_PASSWORD.REQUEST>) {
  try {
    yield call(() => axios.post("", payload));
    yield put(authAction.FORGOT_PASSWORD.SUCCESS());
  } catch (e) {
    yield put(authAction.FORGOT_PASSWORD.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}

function* accountActivationdSaga({ payload, cb }: ReturnType<typeof authAction.ACCOUNT_ACTIVATION.REQUEST>) {
  try {
    yield call(() => axios.post("", payload));
  } catch (e) {
  } finally {
    cb?.();
  }
}

function* signOutSaga() {
  yield call(() => authAction.SIGN_OUT.SUCCESS());
}

export function* authSagaWorker() {
  yield takeLatest(authConstants.SIGN_IN.REQUEST, signInSaga);
  yield takeLatest(authConstants.SIGN_UP.REQUEST, signUpSaga);
  yield takeLatest(authConstants.RESET_PASSWORD.REQUEST, resetPasswordSaga);
  yield takeLatest(authConstants.FORGOT_PASSWORD.REQUEST, forgotPasswordSaga);
  yield takeLatest(authConstants.ACCOUNT_ACTIVATION.REQUEST, accountActivationdSaga);
  yield takeLatest(authConstants.SIGN_OUT.REQUEST, signOutSaga);
}

import { takeLatest, call, put } from "redux-saga/effects";
import { authConstants, authAction } from "@containers/";
import { IUser } from "@containers/";
import axios from "axios";
import { push } from "connected-react-router";
import jwt from "jsonwebtoken";
import { decodedTextSpanIntersectsWith } from "typescript";
import { ROUTER_PATH } from "../../../router/constants";
import { authAPI } from "../../../router/constants";
import { shh } from "@shared/";

function* signInSaga({ payload, cb }: ReturnType<typeof authAction.SIGN_IN.REQUEST>) {
  try {
    const { data } = yield call(() => authAPI.post("/login", payload));
    //@ts-ignore
    const user = yield jwt.verify(data, shh, function (err, decoded) {
      if (err) {
        throw err;
      }
      return decoded;
    });
    localStorage.setItem("token", data);

    yield put(authAction.SIGN_IN.SUCCESS({ data, user: user.data }));
    yield put(push(ROUTER_PATH.TODOS));
  } catch (e) {
    yield put(authAction.SIGN_IN.FAILURE(e as string));
  } finally {
    cb?.();
  }
}
function* signUpSaga({ payload, cb }: ReturnType<typeof authAction.SIGN_UP.REQUEST>) {
  try {
    yield call(() => authAPI.post("/", payload));
    yield put(authAction.SIGN_UP.SUCCESS());
  } catch (e) {
    yield put(authAction.SIGN_UP.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* resetPasswordSaga({ payload, cb }: ReturnType<typeof authAction.RESET_PASSWORD.REQUEST>) {
  try {
    // payload = password, confirmPassword, email
    //  yield call(()=> axios.post(URL, payload))
    yield put(authAction.RESET_PASSWORD.SUCCESS());
    yield put(authAction.SIGN_IN.REQUEST({ email: "", password: "" }));
  } catch (e) {
    yield put(authAction.RESET_PASSWORD.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* forgotPasswordSaga({ payload, cb }: ReturnType<typeof authAction.FORGOT_PASSWORD.REQUEST>) {
  try {
    yield call(() => authAPI.put("/forgot-password", payload));
    yield put(authAction.FORGOT_PASSWORD.SUCCESS());
  } catch (e) {
    yield put(authAction.FORGOT_PASSWORD.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}

function* accountActivationdSaga({ payload, cb }: ReturnType<typeof authAction.ACCOUNT_ACTIVATION.REQUEST>) {
  try {
    //const {first_name, last_name, password, email,  confirmPassword, token} = payload
    const { token, ...rest } = payload;
    const {
      data: { email, password },
    } = yield call(() => authAPI.post(`/account-activation${token}`, rest));
    yield put(push(ROUTER_PATH.TODOS));
  } catch (e) {
    yield put(authAction.ACCOUNT_ACTIVATION.FAILURE(e as Object));
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

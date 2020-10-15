import {
  all,
  fork,
  takeLatest,
  put,
  call,
  throttle,
  delay
} from "redux-saga/effects";
import {
  LOG_IN_REQ,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQ,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQ,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user";
import axios from "axios";

function loginApi(data) {
  axios.post("/api/login", data);
}

function* login(action) {
  try {
    // const result = call(loginApi, action.data);
    yield delay(500);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      data: error.response.data
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQ, login);
}

function logoutApi() {
  axios.post("/api/logout");
}
function* logout() {
  try {
    // const result = call(logoutApi);
    yield delay(500);
    yield put({
      type: LOG_OUT_SUCCESS
      //   data: result.data
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: error.response.data
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQ, logout);
}

function signupApi() {
  axios.post("/api/signup");
}
function* signup() {
  try {
    // const result = call(logoutApi);
    yield delay(500);
    yield put({
      type: SIGN_UP_SUCCESS
      //   data: result.data
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: error.response.data
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQ, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignup)]);
}

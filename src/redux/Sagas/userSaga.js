import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
const url = "https://random-data-api.com/api/users/random_user?size=9";

async function getData() {
  try {
    const response = await axios.request({
      method: "GET",
      url,
    });
    return response.data;
  } catch (err) {
    console.log("error", err);
  }
}

function* fetchUsers(action) {
  try {
    const users = yield call(getData);
    yield put({ type: "GET_USER_SUCCESS", users });
  } catch (err) {
    // console.log("error", err);
    yield put({ type: "GET_USER_FAILED", message: err });
  }
}

function* userSaga() {
  yield takeEvery("GET_USER_REQUEST", fetchUsers);
}

export default userSaga;

import { call, put, takeLatest } from 'redux-saga/effects'
import { sagaUserFetchList } from '../store/user'

async function apiFetchUsers() {
  await new Promise((r) => setTimeout(r, 1000))
  return await fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .catch((err) => err)
}

function* userFetchList() {
  try {
    let response = yield call(apiFetchUsers)
    yield put(sagaUserFetchList.success(response.results))
  } catch (e) {
    yield put(sagaUserFetchList.failure(e))
  }
}

export default function* userFetchListSaga() {
  yield takeLatest(sagaUserFetchList.start.type, userFetchList)
}

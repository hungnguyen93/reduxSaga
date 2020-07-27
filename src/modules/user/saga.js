import { put, call, takeEvery } from 'redux-saga/effects';
import fetAPI from '../../apis/api';
import * as Actions from './constants';

function* fetchUser() {
  try {
    yield put({ type: Actions.IS_LAODING })
    const res = yield call(fetAPI);
    yield put({ type: Actions.GET_USER_SUCCESS, payload: res });
    yield put({ type: Actions.NO_LAODING })

  } catch (e) {
    put({ type: Actions.GET_USER_ERROR, error: e });
    yield put({ type: Actions.NO_LAODING })
  };
};

export default function* fetchUserSaga() {
  yield takeEvery(Actions.GET_USER, fetchUser);
};
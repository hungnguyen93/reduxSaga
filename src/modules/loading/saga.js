import { put, takeEvery } from 'redux-saga/effects';
import * as Actions from './constants';

function* isLoading() {
    try {
        const res = yield call(fetAPI);
        yield put({ type: Actions.GET_USER_SUCCESS, payload: res });
    } catch (e) {
        put({ type: Actions.GET_USER_ERROR, error: e })
    };
};

export default function* setLoadingSaga() {
    yield takeEvery(Actions.IS_LAODING, isLoading);
};
import { all } from 'redux-saga/effects';

import fetchUserSaga from './modules/user/saga';
import setLoadingSaga from './modules/loading/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */

export default function* rootSagas() {
    yield all([fetchUserSaga(), setLoadingSaga()]);
}

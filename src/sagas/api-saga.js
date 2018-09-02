import { call, takeEvery, put } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { http } from 'utils';
import { API_REQUEST } from 'constants/action-types';
import { API_URL } from 'constants/urls';

function* fetchData(action) {
  const nextType = action.payload.nextActionType;
  try {
    const requestUrl = `${API_URL}${action.payload.url}`;

    yield put(
      createAction(nextType.pending, () => action, () => action.meta)()
    );

    let fetchResult = {};

    fetchResult = yield call(
      http,
      action.payload.method,
      requestUrl,
      action.payload.data
    );

    //  fetchResult = fetchResult.body.bodyJson;
    fetchResult = fetchResult.body;

    yield put(
      createAction(nextType.success, () => fetchResult, () => action.meta)(
        fetchResult
      )
    );
  } catch (e) {
    yield put(createAction(nextType.error, () => e, () => action.meta)(e));
  }
}

export default function* apiSaga() {
  yield takeEvery(API_REQUEST, fetchData);
}

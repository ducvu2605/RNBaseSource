import {put, takeEvery} from 'redux-saga/effects';
import exampleActions from './actions';

export function* helloExampleSaga({
  payload,
  type,
}: {
  payload: string;
  type: string;
}) {
  console.log('Hello Example Sagas!', payload);
  yield put(exampleActions.showExampleLog1(type));
}

export default function* exampleSaga() {
  yield takeEvery(exampleActions.showExampleLog, helloExampleSaga);
}

import {all} from 'redux-saga/effects';
import exampleSaga from '../ex-features/saga';

export default function* rootSaga() {
  yield all([
    // Define child Saga modules here
    exampleSaga(),
  ]);
}

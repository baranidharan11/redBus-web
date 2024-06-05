// sagas/index.js
import { all } from "redux-saga/effects";
import busSaga from "./bus/saga";
// import someSaga from './someSaga'; // Import your individual sagas

function* rootSaga() {
  yield all([busSaga()]);
}

export default rootSaga;

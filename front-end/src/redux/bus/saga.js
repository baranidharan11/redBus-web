import { put, takeEvery } from "redux-saga/effects";

function* fetchBuses() {
  try {
    const response = yield fetch("http://localhost:5000/api/Buses");
    const data = yield response.json();
    if (response?.ok) {
      yield put({ type: "SET_BUSES", payload: data });
    }
  } catch (error) {
    yield put({ type: "FETCH_BUSES_FAILURE", error });
  }
}

function* addBus(action) {
  try {
    const response = yield fetch("http://localhost:5000/api/createBus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put({ type: "ADD_BUS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_BUSES_FAILURE", error });
  }
}

function* updateBus(action) {
  try {
    const response = yield fetch(`/api/buses/${action.payload._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put({ type: "UPDATE_BUS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_BUSES_FAILURE", error });
  }
}

function* deleteBus(action) {
  try {
    yield fetch(`/api/buses/${action.payload}`, { method: "DELETE" });
    yield put({ type: "DELETE_BUS_SUCCESS", payload: action.payload });
  } catch (error) {
    yield put({ type: "FETCH_BUSES_FAILURE", error });
  }
}

function* busSaga() {
  yield takeEvery("FETCH_BUSES_REQUEST", fetchBuses);
  yield takeEvery("ADD_BUS_REQUEST", addBus);
  yield takeEvery("UPDATE_BUS_REQUEST", updateBus);
  yield takeEvery("DELETE_BUS_REQUEST", deleteBus);
}

export default busSaga;

import { call, put, all, takeEvery } from "redux-saga/effects";

import { getBooksSuccess } from "./actions";

import { getBooks, filtersBooks } from "../../../api/books";

function* getBooksSaga() {
  try {
    const response = yield call(getBooks);
    yield put(getBooksSuccess(response.data));
  } catch (error) {
    alert("Não foi possível criar o usuário, tente mais tarde!");
  }
}

function* filtersBooksSaga(action) {
  try {
    const response = yield call(filtersBooks, action.filter);
    yield put(getBooksSuccess(response.data));
  } catch (error) {
    alert("Não foi possível criar o usuário, tente mais tarde!");
  }
}

export default all([
  takeEvery("@books/GET_BOOKS_REQUEST", getBooksSaga),
  takeEvery("@books/FILTERS_BOOKS_REQUEST", filtersBooksSaga),
]);

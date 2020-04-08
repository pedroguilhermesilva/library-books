import { all } from "redux-saga/effects";

import users from "./users/saga";
import books from "./books/saga";

export default function* rootSaga() {
  return yield all([users, books]);
}

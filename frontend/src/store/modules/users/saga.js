import { call, put, all, takeLatest } from "redux-saga/effects";

import { createUserSuccess, loginUserSuccess } from "./actions";

import { createUser, loginUser } from "../../../api/user";
import history from "../../../services/history";

function* createUserSaga(action) {
  try {
    const response = yield call(createUser, action.user);
    yield put(createUserSuccess(false));
    yield alert(response.data.success);
    history.push("/login");
  } catch (error) {
    alert("Não foi possível criar o usuário, tente mais tarde!");
  }
}

function* loginUserSaga(action) {
  try {
    const response = yield call(loginUser, action.login);
    yield put(
      loginUserSuccess({
        email: action.login.email,
        name: response.data.name,
      })
    );
    localStorage.setItem("user", response.data.name);
    if (localStorage.getItem("user")) {
      history.push("/reservar");
    } else {
      alert("Algo deu errado no seu login! Tente novamente mais tarde");
    }
  } catch (error) {
    if (error.status === 400) {
      alert(error.response.data);
    } else {
      alert("Não foi possível logar, tente mais tarde novamente!");
    }
  }
}

export default all([
  takeLatest("@user/CREATE_REQUEST", createUserSaga),
  takeLatest("@user/LOGIN_REQUEST", loginUserSaga),
]);

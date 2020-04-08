export function createUserRequest(user) {
  return {
    type: "@user/CREATE_REQUEST",
    user,
  };
}

export function createUserSuccess(user) {
  return {
    type: "@user/CREATE_SUCCESS",
    user,
  };
}

export function loginUserRequest(login) {
  return {
    type: "@user/LOGIN_REQUEST",
    login,
  };
}

export function loginUserSuccess(login) {
  return {
    type: "@user/LOGIN_SUCCESS",
    login,
  };
}

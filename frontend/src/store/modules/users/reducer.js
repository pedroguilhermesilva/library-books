const INITIAL_STATE = {
  loading: false,
  email: "",
  name: "",
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@user/CREATE_REQUEST":
      return { ...state, loading: true };
    case "@user/CREATE_SUCCESS":
      return { ...state, loading: false };
    case "@user/LOGIN_REQUEST":
      return { ...state, loading: true };
    case "@user/LOGIN_SUCCESS":
      return {
        ...state,
        email: action.login.email,
        loading: false,
        name: action.login.name,
      };
    default:
      return state;
  }
}

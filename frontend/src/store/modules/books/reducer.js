const INITIAL_STATE = {
  loading: false,
  books: [],
  reserveBooks: [],
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@books/GET_BOOKS_REQUEST":
      return { ...state, loading: true };
    case "@books/GET_BOOKS_SUCCESS":
      return { ...state, books: action.books, loading: false };
    case "@books/RESERVE_BOOKS":
      return { ...state, reserveBooks: action.books };
    case "@books/DELETE_RESERVE_BOOKS":
      return {
        ...state,
        reserveBooks: state.reserveBooks
          .map((item) => item)
          .filter((bookState) => bookState.id !== action.book[0].id),
      };
    case "@books/GET_RESERVE_BOOKS":
      return state;
    default:
      return state;
  }
}

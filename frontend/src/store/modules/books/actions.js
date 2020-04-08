export function getBooksRequest() {
  return {
    type: "@books/GET_BOOKS_REQUEST",
  };
}

export function getBooksSuccess(books) {
  return {
    type: "@books/GET_BOOKS_SUCCESS",
    books,
  };
}

export function reserveBooks(books) {
  return {
    type: "@books/RESERVE_BOOKS",
    books,
  };
}

export function deleteReserveBook(book) {
  return {
    type: "@books/DELETE_RESERVE_BOOKS",
    book,
  };
}

export function getReserveBook() {
  return {
    type: "@books/GET_RESERVE_BOOKS",
  };
}

export function filterBooksRequest(filter) {
  return {
    type: "@books/FILTERS_BOOKS_REQUEST",
    filter,
  };
}

export function filterBooksSuccess(filter) {
  return {
    type: "@books/FILTERS_BOOKS_SUCCESS",
    filter,
  };
}

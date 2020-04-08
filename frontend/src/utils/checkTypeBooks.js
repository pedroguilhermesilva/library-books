const checkTypeBooks = (book, type) => {
  const bookChecked = book.filter((books) => books.type === type);
  if (bookChecked.length <= 0) {
    return false;
  } else {
    return true;
  }
};

export default checkTypeBooks;

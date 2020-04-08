import api from "../services/api";

export const getBooks = () => api.get("/books");
export const filtersBooks = (payload) =>
  api.get(`/books/filters?type=${payload}`);

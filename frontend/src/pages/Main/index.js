import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import checkTypeBooks from "../../utils/checkTypeBooks";

import { FiPower } from "react-icons/fi";
import "./styles.css";

import logo from "../../assets/Logo.svg";

import * as BooksActions from "../../store/modules/books/actions";

export default function Main() {
  const [dataChange, setDataChange] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const userName = useSelector((state) => state.users.name);

  const filter = [
    { name: "Todos", value: "all" },
    { name: "Terror", value: "horror" },
    { name: "Romance", value: "romance" },
    { name: "Aventura", value: "adventure" },
  ];

  const changeFilter = (value) =>
    dispatch(BooksActions.filterBooksRequest(value));

  const checkedBooks = (checked, value) => {
    if (checked) {
      dataChange.push(value);
    } else {
      const deleteValue = dataChange.filter(
        (change) => change.isbn !== value.isbn
      );
      setDataChange(deleteValue);
    }
  };

  const submitForm = (value) => {
    value.preventDefault();

    if (localStorage.getItem("user") && dataChange.length >= 1) {
      dispatch(BooksActions.reserveBooks(dataChange));
      history.push("/reservar");
    } else if (dataChange.length >= 1) {
      dispatch(BooksActions.reserveBooks(dataChange));
      history.push("/login");
    } else {
      alert("É preciso selecionar no mínimo um livro");
    }
  };

  const loginOut = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  useEffect(() => {
    dispatch(BooksActions.getBooksRequest());
  }, [dispatch]);

  return (
    <div className="main-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        {localStorage.getItem("user") ? (
          <>
            <span>Bem vindo, {userName || localStorage.getItem("user")}</span>
            <button type="button">
              <FiPower size={18} color="#E02041" onClick={loginOut} />
            </button>
          </>
        ) : (
          <div className="filter">
            <p>Filtros:</p>
            <select onChange={(e) => changeFilter(e.target.value)}>
              {filter.map((filters) => (
                <option key={filters.name} value={filters.value}>
                  {filters.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </header>

      {localStorage.getItem("user") ? (
        <div className="filter">
          <p>Filtros:</p>
          <select onChange={(e) => changeFilter(e.target.value)}>
            {filter.map((filters) => (
              <option key={filters.name} value={filters.value}>
                {filters.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <>
        {localStorage.getItem("") ? (
          <div className="filter">
            <p>Filtros:</p>
            <select onChange={(e) => changeFilter(e.target.value)}>
              {filter.map((filters) => (
                <option key={filters.name} value={filters.value}>
                  {filters.name}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </>

      <form onSubmit={submitForm}>
        {checkTypeBooks(books, "action") ? (
          <React.Fragment>
            <h1>Ação</h1>
            <ul>
              {books.map((book) => (
                <React.Fragment key={book.isbn}>
                  {book.type === "action" ? (
                    <label key={book.isbn}>
                      <input
                        type="checkbox"
                        onChange={(e) => checkedBooks(e.target.checked, book)}
                      />
                      <li>
                        <strong>LIVROS:</strong>
                        <p>{book.name}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{book.drescription}</p>

                        <strong>ISBN:</strong>
                        <p>{book.isbn}</p>
                      </li>
                    </label>
                  ) : null}
                </React.Fragment>
              ))}
            </ul>
          </React.Fragment>
        ) : null}
        {checkTypeBooks(books, "horror") ? (
          <>
            <h1>Terror</h1>
            <ul>
              {books.map((book) => (
                <React.Fragment key={book.isbn}>
                  {book.type === "horror" ? (
                    <label key={book.isbn}>
                      <input
                        type="checkbox"
                        onChange={(e) => checkedBooks(e.target.checked, book)}
                      />
                      <li>
                        <strong>LIVROS:</strong>
                        <p>{book.name}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{book.drescription}</p>

                        <strong>ISBN:</strong>
                        <p>{book.isbn}</p>
                      </li>
                    </label>
                  ) : null}
                </React.Fragment>
              ))}
            </ul>
          </>
        ) : null}
        {checkTypeBooks(books, "romance") ? (
          <>
            <h1>Romance</h1>
            <ul>
              {books.map((book) => (
                <React.Fragment key={book.isbn}>
                  {book.type === "romance" ? (
                    <label key={book.isbn}>
                      <input
                        type="checkbox"
                        onChange={(e) => checkedBooks(e.target.checked, book)}
                      />
                      <li>
                        <strong>LIVROS:</strong>
                        <p>{book.name}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{book.drescription}</p>

                        <strong>ISBN:</strong>
                        <p>{book.isbn}</p>
                      </li>
                    </label>
                  ) : null}
                </React.Fragment>
              ))}
            </ul>
          </>
        ) : null}
        {checkTypeBooks(books, "adventure") ? (
          <>
            <h1>Aventura</h1>
            <ul>
              {books.map((book) => (
                <React.Fragment key={book.isbn}>
                  {book.type === "adventure" ? (
                    <label key={book.isbn}>
                      <input
                        type="checkbox"
                        onChange={(e) => checkedBooks(e.target.checked, book)}
                      />
                      <li>
                        <strong>LIVROS:</strong>
                        <p>{book.name}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{book.drescription}</p>

                        <strong>ISBN:</strong>
                        <p>{book.isbn}</p>
                      </li>
                    </label>
                  ) : null}
                </React.Fragment>
              ))}
            </ul>
          </>
        ) : null}
        <button className="button" type="submit">
          Reservar
        </button>
      </form>
    </div>
  );
}

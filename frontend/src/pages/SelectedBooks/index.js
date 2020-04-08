import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import crypton from "crypto";

import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";

import logo from "../../assets/Logo.svg";

import * as BooksActions from "../../store/modules/books/actions";

export default function SelectedBooks() {
  const selectedBooks = useSelector((state) => state.books.reserveBooks);
  const userName = useSelector((state) => state.users.name);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDeleteBook = (book) => {
    const deleteValue = selectedBooks.filter(
      (deleteBook) => deleteBook.isbn === book.isbn
    );
    dispatch(BooksActions.deleteReserveBook(deleteValue));
  };

  const submitForm = (value) => {
    value.preventDefault();
    alert(
      "Seu código de confirmação é: " + crypton.randomBytes(4).toString("HEX")
    );
    history.push("/");
  };

  const loginOut = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  useEffect(() => {
    dispatch(BooksActions.getReserveBook());
  }, [dispatch, selectedBooks]);

  return (
    <div className="selected-books-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vindo, {userName || localStorage.getItem("user")}</span>
        <button type="button" onClick={loginOut}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <form onSubmit={submitForm}>
        <h1>Minha reserva</h1>
        <ul>
          {selectedBooks?.map((book) => (
            <React.Fragment key={book.isbn}>
              <li>
                <strong>LIVROS:</strong>
                <p>{book.name}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{book.drescription}</p>

                <strong>ISBN:</strong>
                <p>{book.isbn}</p>

                <strong>Data locação:</strong>
                <p>{`${book.start_date} até ${book.end_date}`}</p>

                <button onClick={() => handleDeleteBook(book)} type="button">
                  <FiTrash2 size={20} color="a8a8b3" />
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <button className="button" type="submit">
          Reservar
        </button>
      </form>
    </div>
  );
}

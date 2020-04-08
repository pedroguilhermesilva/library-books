import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/Logo.svg";

import * as UserActions from "../../store/modules/users/actions";

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(UserActions.createUserRequest(user));
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Biblioteca Nacional" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, para ter acesso a biblioteca nacional</p>

          <Link className="back-link" to="/login">
            <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="e-mail"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

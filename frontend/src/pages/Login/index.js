import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/Logo.svg";
import logoIn from "../../assets/login.svg";
import "./styles.css";

import * as UserActions from "../../store/modules/users/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function goToReserve(e) {
    e.preventDefault();
    const login = { email, password };
    dispatch(UserActions.loginUserRequest(login));
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={goToReserve}>
          <h1>Entre com sua conta</h1>

          <input
            type="email"
            placeholder="Seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/cadastro">
            <FiLogIn size={16} color="#E02041"></FiLogIn>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img className="image-Login" src={logoIn} alt="Heroes" />
    </div>
  );
}

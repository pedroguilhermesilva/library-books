import React from "react";
import pageNotFound from "../../assets/notFound.svg";
import "./styles.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div>
        <img
          style={{ width: "600px" }}
          src={pageNotFound}
          alt="Not Found Page"
        />
        <h1 style={{ textAlign: "center" }}>
          Desculpe, 404 Página não encontrada
        </h1>
        <p style={{ textAlign: "center", fontSize: 18, marginTop: 10 }}>
          Parece que vc tentou acessar uma página que não existe ou foi
          deletada.
        </p>
      </div>
    </div>
  );
}

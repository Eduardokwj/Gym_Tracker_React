import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";
import Avatar from "../../assets/Avatar.png";

export default function Header() {
  const { user } = useContext(UserContext); 

  const getFirstName = (name) => {
    return name ? name.split(" ")[0] : "";
  };

  return (
    <header className="header">
      <h1>Gym Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/exercicios">Exercícios</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
        </ul>
      </nav>
      <div className="user-info">
        <img
          src={Avatar}
          alt="Avatar"
          className="avatar"
        />
        {user?.nome && <span>{getFirstName(user.nome)}</span>}
      </div>
    </header>
  );
}

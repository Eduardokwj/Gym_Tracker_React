import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import "./styles.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h2>Página não encontrada</h2>
      <p>Opa! A rota que você tentou acessar não existe.</p>
      <CustomButton onClick={() => navigate("/")}>Voltar para o Início</CustomButton>
    </div>
  );
}

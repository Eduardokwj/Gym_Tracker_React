import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import "./styles.css";
import Banner from "../../assets/Banner_Treinos.jpeg";

export default function Home() {
  const [usuarioCadastrado, setUsuarioCadastrado] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsuarioCadastrado(true);
    }
  }, []);

  return (
    <div className="home-container">
      <img src={Banner} alt="Banner de Treino" className="home-banner" />
      <div className="home-content">
        <h2>Bem-vindo ao Gym Tracker</h2>

        {usuarioCadastrado ? (
          <>
            <p>Olá! Vá direto para registrar seus treinos e acompanhar seus exercícios.</p>
            <CustomButton to="/registro">Registrar Treino</CustomButton>
            <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#ccc" }}>
              Os treinos registrados ficarão disponíveis na aba "Exercícios".
            </p>
          </>
        ) : (
          <>
            <p>Primeira vez por aqui? Faça seu cadastro para começar a usar o Gym Tracker!</p>
            <CustomButton to="/cadastro">Fazer Cadastro</CustomButton>
          </>
        )}
      </div>
    </div>
  );
}

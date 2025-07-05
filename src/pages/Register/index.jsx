import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";
import FeedbackAlert from "../../components/FeedbackAlert";
import "./styles.css";

export default function Register() {
  const [exercicio, setExercicio] = useState("");
  const [series, setSeries] = useState("");
  const [repeticoes, setRepeticoes] = useState("");
  const [peso, setPeso] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!exercicio || !series || !repeticoes || !peso) {
      setAlertMessage("Preencha todos os campos.");
      setAlertType("warning");
      return;
    }

    if (isNaN(series) || isNaN(repeticoes) || isNaN(peso)) {
      setAlertMessage("Séries, repetições e peso devem ser números.");
      setAlertType("error");
      return;
    }

    // Dados válidos, salva no localStorage
    const novoExercicio = {
      nome: exercicio,
      series,
      repeticoes,
      peso,
    };

    const exerciciosSalvos = JSON.parse(localStorage.getItem("exercicios")) || [];
    exerciciosSalvos.push(novoExercicio);
    localStorage.setItem("exercicios", JSON.stringify(exerciciosSalvos));

    setAlertMessage("Exercício cadastrado com sucesso!");
    setAlertType("success");

    // Limpa os campos
    setExercicio("");
    setSeries("");
    setRepeticoes("");
    setPeso("");
  };

  return (
    <div className="register-container">
      <h2>Cadastro de Exercício</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <FormInput
          label="Exercício"
          id="exercicio"
          value={exercicio}
          onChange={(e) => setExercicio(e.target.value)}
          placeholder="Nome do exercício"
          required
        />
        <FormInput
          label="Séries"
          id="series"
          type="number"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
          placeholder="Ex: 3"
          required
        />
        <FormInput
          label="Repetições"
          id="repeticoes"
          type="number"
          value={repeticoes}
          onChange={(e) => setRepeticoes(e.target.value)}
          placeholder="Ex: 12"
          required
        />
        <FormInput
          label="Peso (kg)"
          id="peso"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ex: 30"
          required
        />
        <CustomButton type="submit">Cadastrar Exercício</CustomButton>
      </form>

      <FeedbackAlert message={alertMessage} type={alertType} />
    </div>
  );
}

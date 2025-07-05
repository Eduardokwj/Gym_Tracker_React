import React, { useEffect, useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import FeedbackAlert from "../../components/FeedbackAlert";
import "./styles.css";

export default function Exercises() {
  const [exercicios, setExercicios] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("exercicios");
    if (stored) {
      setExercicios(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (index) => {
    const novaLista = [...exercicios];
    novaLista.splice(index, 1);
    setExercicios(novaLista);
    localStorage.setItem("exercicios", JSON.stringify(novaLista));
  };

  const handleEdit = (index, novoItem) => {
    const novaLista = [...exercicios];
    novaLista[index] = novoItem;
    setExercicios(novaLista);
    localStorage.setItem("exercicios", JSON.stringify(novaLista));
  };

  const exerciciosFiltrados = exercicios.filter((item) =>
    item.nome?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="exercises-page">
      <h2>Seus Exercícios</h2>

      <div className="search-section">
        <input
          type="text"
          placeholder="Buscar exercício..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="search-input"
        />

        {exerciciosFiltrados.length === 0 ? (
          <FeedbackAlert type="error" message="Nenhum exercício encontrado." />
        ) : (
          <div className="exercise-list">
            {exerciciosFiltrados.map((item, index) => (
              <ExerciseCard
                key={index}
                index={index}
                nome={item.nome}
                series={item.series}
                repeticoes={item.repeticoes}
                peso={item.peso}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

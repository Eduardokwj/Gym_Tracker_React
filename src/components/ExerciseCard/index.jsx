import React, { useState } from "react";
import "./styles.css";

export default function ExerciseCard({ nome, series, repeticoes, peso, index, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ nome, series, repeticoes, peso });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(index, formData);
    setIsEditing(false);
  };

  return (
    <div className="exercise-card">
      {isEditing ? (
        <>
          <input name="nome" value={formData.nome} onChange={handleChange} />
          <input name="series" value={formData.series} onChange={handleChange} />
          <input name="repeticoes" value={formData.repeticoes} onChange={handleChange} />
          <input name="peso" value={formData.peso} onChange={handleChange} />
          <button className="btn-save" onClick={handleSave}>Salvar</button>
          <button className="btn-cancel" onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <h3>{nome}</h3>
          <p><strong>Séries:</strong> {series}</p>
          <p><strong>Repetições:</strong> {repeticoes}</p>
          <p><strong>Peso:</strong> {peso} kg</p>
          <div className="card-buttons">
            <button className="btn-edit" onClick={() => setIsEditing(true)}>Editar</button>
            <button
              className="btn-delete"
              onClick={() => {
                if (window.confirm(`Deseja remover "${nome}"?`)) {
                  onDelete(index);
                }
              }}
            >
              Remover
            </button>
          </div>
        </>
      )}
    </div>
  );
}

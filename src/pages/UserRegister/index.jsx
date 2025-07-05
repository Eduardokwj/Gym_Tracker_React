import React, { useState , useContext } from "react";
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";
import FeedbackAlert from "../../components/FeedbackAlert";
import "./styles.css";
import { UserContext } from "../../contexts/UserContext"

export default function UserRegister() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const { setUser } = useContext(UserContext);


  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const [isLoadingCep, setIsLoadingCep] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCepBlur = async () => {
    const cep = formData.cep.replace(/\D/g, "");
    {isLoadingCep && <p>🔍 Buscando CEP...</p>}
    if (cep.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setFeedback({ type: "error", message: "CEP não encontrado." });
        return;
      }

      setFormData((prev) => ({
        ...prev,
        rua: data.logradouro || "",
        bairro: data.bairro || "",
        cidade: data.localidade || "",
        estado: data.uf || "",
      }));
      setFeedback({ type: "", message: "" });
    } catch (error) {
      setFeedback({ type: "error", message: "Erro ao buscar o CEP." });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de sucesso
    setFeedback({ type: "success", message: "Usuário cadastrado com sucesso!" });

    // Aqui você poderia salvar no localStorage ou enviar a uma API real
    localStorage.setItem("user", JSON.stringify(formData));

    setUser(formData);


    // Resetando formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
    });
  };

  return (
    <div className="user-register-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <FormInput label="Nome" id="nome" value={formData.nome} onChange={handleChange} required />
        <FormInput label="E-mail" type="email" id="email" value={formData.email} onChange={handleChange} required />
        <FormInput label="Telefone" type="tel" id="telefone" value={formData.telefone} onChange={handleChange} required />
        <FormInput label="CEP" id="cep" value={formData.cep} onChange={handleChange} onBlur={handleCepBlur} required />
        <FormInput label="Rua" id="rua" value={formData.rua} onChange={handleChange} />
        <FormInput label="Bairro" id="bairro" value={formData.bairro} onChange={handleChange} />
        <FormInput label="Cidade" id="cidade" value={formData.cidade} onChange={handleChange} />
        <FormInput label="Estado" id="estado" value={formData.estado} onChange={handleChange} />
        <CustomButton type="submit">Cadastrar</CustomButton>
      </form>
      {feedback.message && <FeedbackAlert type={feedback.type} message={feedback.message} />}
    </div>
  );
}

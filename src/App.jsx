import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Register from './pages/Register';
import CadastroUsuario from './pages/UserRegister';
import NotFound from './pages/NotFound';

import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicios" element={<Exercises />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

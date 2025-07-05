# 🏋️‍♂️ Gym Tracker (Front-end)

Aplicação desenvolvida em React como projeto do MVP da disciplina de **Desenvolvimento Front-end Avançado**.  
O objetivo é fornecer uma interface simples e funcional para registrar treinos e cadastrar usuários, utilizando componentização, localStorage e integração com uma API externa.

---

## 🎯 Objetivo

O **Gym Tracker** resolve o problema da desorganização na rotina de treinos, permitindo que qualquer pessoa cadastre seus exercícios e acompanhe seu progresso diretamente no navegador — sem necessidade de login ou banco de dados externo.

---

## 🚀 Funcionalidades

- ✅ Cadastro de usuário com preenchimento automático de endereço via CEP
- ✅ Registro de exercícios com nome, séries, repetições e peso
- ✅ Listagem, edição e exclusão de exercícios
- ✅ Armazenamento de dados local (localStorage)
- ✅ Feedbacks visuais e mensagens de sucesso ou erro
- ✅ Layout responsivo em modo escuro
- ✅ Avatar e nome do usuário exibidos no cabeçalho
- ✅ Busca de exercícios por nome

---

## 🧱 Tecnologias Utilizadas

- React
- React Router DOM
- JavaScript (ES6+)
- CSS (modo escuro por padrão)
- API externa: [ViaCEP](https://viacep.com.br)
- HTML5

---

## 🧭 Estrutura do Projeto

src/

├── assets/ # Imagens

├── components/ # Componentes reutilizáveis (Header, Button, Input, Card, etc)

├── contexts/ # Contexto global do usuário

├── pages/ # Páginas: Home, Exercises, Register, UserRegister, NotFound

├── App.jsx # Rotas principais

├── index.jsx # Entrada da aplicação
└── index.css # Estilos globais


---

## 🖥️ Como rodar localmente

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/gym-tracker.git
```

2. Acesse o diretório

```bash
cd gym-tracker
```

3. Instale as dependências

```bash
npm install
```

4. Inicie o projeto:

```bash
npm start
```

A aplicação estará disponível em http://localhost:3000

🌐API externa utilizada

-Nome: ViaCEP

-Link: https://viacep.com.br

-Licença: Gratuita e pública

-Necessita chave de API? Não

-Rota utilizada: https://viacep.com.br/ws/{cep}/json/


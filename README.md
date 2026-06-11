# Sistema de Gestão de Eventos

Este projeto consiste em uma API REST desenvolvida com Node.js, Express e MongoDB para gerenciamento de eventos. O sistema permite cadastro e autenticação de usuários, além do gerenciamento completo de eventos por meio de operações CRUD protegidas por JWT.

A aplicação também possui documentação interativa utilizando Swagger/OpenAPI, permitindo testar os endpoints diretamente pelo navegador.

---

# Objetivo do Projeto

O objetivo deste projeto foi aplicar conceitos de desenvolvimento back-end, segurança e documentação de APIs, utilizando:

* Desenvolvimento de API REST
* Autenticação e autorização com JWT
* Integração com MongoDB
* Estruturação em camadas (Controllers, Models, Routes e Middlewares)
* Operações CRUD
* Documentação de API com Swagger/OpenAPI

---

# Tecnologias Utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* Swagger UI Express
* Swagger JSDoc
* HTML
* CSS
* JavaScript
* dotenv
* cors

---

# Funcionalidades

* Cadastro de usuários
* Login autenticado
* Criptografia de senhas
* Geração de Token JWT
* Criação de eventos
* Listagem de eventos
* Atualização de eventos
* Exclusão de eventos
* Rotas protegidas
* Interface web integrada
* Documentação Swagger/OpenAPI

---

# Estrutura do Projeto

```bash
api-eventos/
│
├── config/
│   ├── db.js
│   └── swagger.js
│
├── public/
│   └── index.html
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── eventController.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Event.js
│   │
│   └── routes/
│       ├── authRoutes.js
│       └── eventRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Sistema de Autenticação

A autenticação é realizada através de JWT.

Fluxo:

1. Usuário realiza login.
2. O sistema gera um token JWT.
3. O token é armazenado no cliente.
4. O token é enviado no cabeçalho das requisições protegidas.

Exemplo:

```bash
Authorization: Bearer TOKEN
```

---

# Banco de Dados

Banco utilizado:

* MongoDB

Coleções:

* users
* events

Relacionamento:

* Cada evento pertence a um usuário autenticado.

---

# Como Executar o Projeto

## 1. Clonar o Repositório

```bash
git clone https://github.com/joao-cunha150/api-eventos.git
```

## 2. Entrar na Pasta

```bash
cd api-eventos
```

## 3. Instalar Dependências

```bash
npm install
```

## 4. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/eventos_db
JWT_SECRET=sua_chave_jwt
```

## 5. Executar o Projeto

```bash
npm run dev
```

ou

```bash
node server.js
```

---

# Documentação Swagger

Após iniciar o servidor, a documentação da API estará disponível em:

```text
http://localhost:3000/api-docs
```

Através do Swagger é possível:

* Visualizar todos os endpoints da API
* Consultar parâmetros e corpos de requisição
* Ver códigos de resposta
* Testar requisições diretamente pelo navegador utilizando o botão "Try it out"

---

# Endpoints da API

## Autenticação

### POST /api/auth/register

Cadastro de usuários.

### POST /api/auth/login

Autenticação e geração de token JWT.

---

## Eventos

Rotas protegidas por autenticação.

### GET /api/events

Lista os eventos cadastrados.

### POST /api/events

Cria um novo evento.

### PUT /api/events/{id}

Atualiza um evento existente.

### DELETE /api/events/{id}

Remove um evento.

---

# Autor

João Victor da Cunha Rosa

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Web e APIs REST.

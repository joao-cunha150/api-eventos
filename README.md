# Sistema de Gestão de Eventos

Este projeto foi desenvolvido com o objetivo de criar uma aplicação completa de gerenciamento de eventos utilizando Node.js, Express e MongoDB.  
O sistema permite que usuários realizem cadastro, login autenticado e gerenciamento de eventos pessoais.

---

#  Objetivo do Projeto

O principal objetivo deste trabalho foi aplicar conceitos de desenvolvimento back-end utilizando:

- Criação de API REST
- Autenticação com JWT
- Integração com banco de dados MongoDB
- Estruturação de projeto em camadas
- Operações CRUD
- Organização de rotas, controllers e models

Além disso, foi criada uma interface web simples para interação com a API.

---

#  Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- HTML
- CSS
- JavaScript
- dotenv
- cors

---

#  Estrutura do Projeto

```bash
api-eventos/
│
├── config/
│   └── db.js
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
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

#  Explicação da Estrutura

##  config/

Contém a configuração de conexão com o MongoDB.

### db.js
Responsável por conectar o sistema ao banco de dados utilizando Mongoose.

---

##  public/

Contém o front-end do projeto.

### index.html
Arquivo responsável pela interface do sistema:
- login
- cadastro
- criação de eventos
- listagem de eventos

Também contém JavaScript responsável pelas requisições para a API.

---

##  src/controllers/

Os controllers concentram a lógica do sistema.

### authController.js
Responsável por:
- cadastrar usuários
- realizar login
- gerar token JWT

### eventController.js
Responsável pelas operações CRUD:
- criar evento
- listar eventos
- atualizar evento
- excluir evento

---

##  src/models/

Responsável pela modelagem do banco de dados.

### User.js
Modelo de usuário contendo:
- nome
- email
- senha criptografada

Também possui:
- hash de senha com bcryptjs
- método comparePassword

### Event.js
Modelo responsável pelos eventos cadastrados pelos usuários.

---

##  src/routes/

Define as rotas da API.

### authRoutes.js
Rotas:
- `/api/auth/register`
- `/api/auth/login`

### eventRoutes.js
Rotas protegidas:
- criar eventos
- listar eventos
- atualizar eventos
- excluir eventos

---

##  src/middlewares/

### authMiddleware.js

Middleware responsável pela autenticação JWT.

Funções:
- verificar token
- validar usuário logado
- proteger rotas privadas

---

#  Sistema de Autenticação

A autenticação foi implementada utilizando JWT.

Fluxo:
1. usuário realiza login
2. sistema gera um token
3. token é armazenado no navegador
4. token é enviado nas rotas protegidas

Header utilizado:

```bash
Authorization: Bearer TOKEN
```

---

#  Banco de Dados

O banco utilizado foi MongoDB.

Coleções utilizadas:
- users
- events

Relacionamento:
- cada evento pertence a um usuário

---

#  Funcionalidades Implementadas

 Cadastro de usuários  
 Login autenticado  
 Criptografia de senha  
 Criação de eventos  
 Listagem de eventos  
 Atualização de eventos  
 Exclusão de eventos  
 Rotas protegidas com JWT  
 Interface web integrada  
 Integração com MongoDB  

---

#  Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/joao-cunha150/api-eventos.git
```

---

## 2. Entrar na pasta

```bash
cd api-eventos
```

---

## 3. Instalar dependências

```bash
npm install
```

---

## 4. Criar arquivo .env

Criar um arquivo `.env` na raiz do projeto contendo:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/eventos_db
JWT_SECRET=sua_chave_jwt
```

---

## 5. Executar servidor

```bash
node server.js
```

---

## 6. Abrir no navegador

```text
http://localhost:3000
```

---

#  Endpoints da API

# Autenticação

## Registrar usuário

### POST `/api/auth/register`

```json
{
  "name": "João",
  "email": "joao@email.com",
  "password": "123456"
}
```

---

## Login

### POST `/api/auth/login`

```json
{
  "email": "joao@email.com",
  "password": "123456"
}
```

---

# Eventos

 Necessário token JWT.

---

## Criar evento

### POST `/api/events`

---

## Listar eventos

### GET `/api/events`

---

## Atualizar evento

### PUT `/api/events/:id`

---

## Excluir evento

### DELETE `/api/events/:id`

---

#  Autor

João Victor da Cunha Rosa

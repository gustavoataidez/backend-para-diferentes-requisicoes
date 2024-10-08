﻿# Backend para Diferentes Requisições

## Screenshots

<img src="https://github.com/user-attachments/assets/4b850e34-b74c-436b-b1b1-8c68d3cd81e1" width="600" alt="Screenshot 1">
<br>
<img src="https://github.com/user-attachments/assets/24af2994-75a4-4347-9317-af4411e3ee50" width="600" alt="Screenshot 2">

## 📌 Sobre o Projeto

Este projeto é um backend robusto desenvolvido para lidar com diferentes tipos de requisições HTTP, focado no gerenciamento de registros de alunos. Ele oferece uma API RESTful que permite operações CRUD (Criar, Ler, Atualizar e Deletar) em um sistema de cadastro de estudantes.

## 🚀 Funcionalidades

- Listagem de todos os alunos cadastrados
- Cadastro de novos alunos
- Atualização de informações de alunos existentes
- Remoção de alunos do sistema
- Interface web para interação com o sistema

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (para renderização de views)
- HTML5 e CSS3
- JavaScript (ES6+)
- Bootstrap 5

## 🏁 Começando

### Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (geralmente vem com o Node.js)

### Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/seu-usuario/backend-para-diferentes-requisicoes.git
   ```

2. Entre no diretório do projeto:

   ```
   cd backend-para-diferentes-requisicoes
   ```

3. Instale as dependências:

   ```
   npm install
   ```

4. Inicie o servidor:

   ```
   npm start
   ```

5. Acesse `http://localhost:3000` no seu navegador.

## 📚 Estrutura do Projeto

- `app.js`: Arquivo principal da aplicação
- `routes/`: Diretório contendo as rotas da API
- `views/`: Templates EJS para renderização do frontend
- `public/`: Arquivos estáticos (CSS, JavaScript do cliente)

## 📝 API Endpoints

- `GET /alunos`: Retorna a lista de todos os alunos
- `POST /alunos`: Cria um novo aluno
- `PUT /alunos/:id`: Atualiza as informações de um aluno específico
- `DELETE /alunos/:id`: Remove um aluno do sistema

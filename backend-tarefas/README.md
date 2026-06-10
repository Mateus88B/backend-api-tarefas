# ✅ Tarefas - Backend/API

API REST criada em **Node.js + Express + MongoDB** para o CRUD de tarefas do aplicativo mobile em React Native com Expo.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- Dotenv

## Estrutura

```text
backend-tarefas/
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── server.js
├── package.json
├── .env.example
└── README.md
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env` usando o exemplo:

```bash
cp .env.example .env
```

No Windows, se o comando acima não funcionar, crie o arquivo `.env` manualmente com este conteúdo:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/tarefas_db
```

3. Inicie o MongoDB local ou use uma URL do MongoDB Atlas no `MONGO_URI`.

4. Rode o backend:

```bash
npm run dev
```

Ou:

```bash
npm start
```

A API ficará em:

```text
http://localhost:3000
```

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Testa se a API está funcionando |
| GET | `/health` | Verifica status da API |
| GET | `/api/tasks` | Lista todas as tarefas |
| GET | `/api/tasks/:id` | Busca uma tarefa pelo ID |
| POST | `/api/tasks` | Cadastra uma tarefa |
| PUT | `/api/tasks/:id` | Edita uma tarefa |
| PATCH | `/api/tasks/:id/toggle` | Marca/desmarca como concluída |
| DELETE | `/api/tasks/:id` | Exclui uma tarefa |

## Exemplo de JSON para cadastrar tarefa

```json
{
  "title": "Estudar React Native",
  "description": "Finalizar a atividade fullstack",
  "dueDate": "10/06/2026",
  "priority": "alta",
  "completed": false
}
```

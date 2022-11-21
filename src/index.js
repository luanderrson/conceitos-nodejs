const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username }  = request.headers;

  const user = users.find((user) => user.username === username);

  if(!user){
    return response.status(400).json({ error: "User not Found" })
  }

  request.user = user;
  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;
  users.push({
    id: uuidv4(),
    name,
    username,
    todos: []
  })

  return response.status(201).send();
});

app.get('/todos/', checksExistsUserAccount, (request, response) => {
 const { user } = request;

 return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;

  const deadLine = new Date(deadline + " 00:00");
  
  const { user } = request;

  const insertToDo = {
    id: uuidv4(),
    title,
    deadLine,
    created_at: new Date()
  }

  user.todos.push(insertToDo);

  return response.status(201).send();

});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { user } = request;

  user.todos.title[request.params.id]= title;
  user.todos.deadLine[request.params.id]= deadline;

  return response.status(201).send();
});

app.get('/users', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user);
})

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});


module.exports = app;
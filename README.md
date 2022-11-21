## DESAFIO 01 - Conceitos Node JS

[x] - `POST/users` A rota deve receber name, e username dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:
```
{ 
	id: 'uuid', // precisa ser um uuid
	name: 'Danilo Vieira', 
	username: 'danilo', 
	todos: []
}  
```

[x] - `POST/users` - A rota deve receber, pelo header da requisição, uma propriedade username contendo o `username` do usuário e retornar uma lista com todas as tarefas desse usuário.

[x] - `POST/todos` - A rota deve receber `title` e `deadline` dentro do corpo da requisição e, uma propriedade `username` contendo o `username` do usuário dentro do header da requisição. Ao criar um novo todo, ele deve ser armazenada dentro da lista todos do usuário que está criando essa tarefa. Cada tarefa deverá estar no seguinte formato: 
```
{ 
	id: 'uuid', // precisa ser um uuid
	title: 'Nome da tarefa',
	done: false, 
	deadline: '2021-02-27T00:00:00.000Z', 
	created_at: '2021-02-22T00:00:00.000Z'
}
```

[ ] - `POST/todos/:id` - A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e receber as propriedades `title` e `deadline` dentro do corpo. É preciso alterar apenas o title e o deadline da tarefa que possua o id igual ao id presente nos parâmetros da rota.
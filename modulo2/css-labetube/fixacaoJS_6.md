```javascript 

 // Escreva seu código aqui
   const novoArray = tarefas.filter((tarefa) => {
   return tarefa.status === "done"
 }).map((tarefa) => {
  return tarefa.titulo
 })
 
 return novoArray

}
```
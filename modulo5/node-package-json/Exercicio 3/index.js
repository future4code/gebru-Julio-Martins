
/*- **Exercício 3**
   
   Crie uma aplicação Node que receba uma string representando **uma tarefa.** O programa deve adicionar a **nova tarefa** em uma variável que represente uma **lista de tarefas.** A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada. */


const task = process.argv[2]
let taskList = ["Comprar Coquinha", "Vota no Lula"]

const addTaskToList = () => {
    const newTaskList = [...taskList, task]
    console.log("Tarefa adicionada com sucesso!")
    console.log("tarefas: ", newTaskList)
}

addTaskToList()


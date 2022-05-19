/*- **Exercício 1**
    
    a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?

    Resposta: process.argv[2], process.argv[3], o índice depende de 
    qual argumento deseja acessar. 
    
    b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
    Resposta:*/

    /*c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
    "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"*/

// REPOSTA B e C + DESAFIO


// const name = process.argv[2];
// const age = Number(process.argv[3]);

// if (name && age) {
//     console.log("\x1B[1m", "\x1b[32m", `Olá, ${name}! Você tem ${age} anos.`)
//     console.log("\x1B[1m", "\x1B[34m", `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)
// } else if (name && !age) {
//     console.log("\x1B[1m", "\x1B[36m", `Esperava 2 parâmetros e só recebi 1`)
// } else {
//     console.log("\x1B[1m", "\x1B[35m", `Não recebi nenhum parâmetro`)
// }


//-------------------------------------------------------------------------------------------------------------------------
/*- **Exercício 2**

Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos. */

// const operation = process.argv[2];
// const firstNumber = Number(process.argv[3]);
// const secondNumber = Number(process.argv[4]);

// const functionMath = () => {
//     if (operation && firstNumber && !secondNumber) {
//         return `Esperava 3 parâmetros só recebi 2!!!`
//     } else if (operation && !firstNumber && !secondNumber) {
//         return `Esperava 3 parâmetros só recebi 1`
//     } else {
//         if (operation === "add") {
//             const result = firstNumber + secondNumber
//             return `Resposta: ${result}`
//         } else if (operation === "sub") {
//             const result = firstNumber - secondNumber
//             return console.log`Resposta: ${result}`
//         } else if (operation === "div") {
//             const result = firstNumber / secondNumber
//             return `Resposta: ${result}`
//         } else if (operation === "mult") {
//             const result = firstNumber * secondNumber
//             return `Resposta: ${result}`
//         }

//     };

// };
// console.log("\x1B[1m", "\x1B[32m", functionMath())

 /*- **Exercício 3**
    
    Crie uma aplicação Node que receba uma string representando **uma tarefa.** O programa deve adicionar a **nova tarefa** em uma variável que represente uma **lista de tarefas.** A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada. */
// const task = process.argv[2]
// let taskList = ["Comprar Coquinha", "Vota no Lula"]

// const addTaskToList = () => {
//     const newTaskList = [...taskList, task]
//     console.log("Tarefa adicionada com sucesso!")
//     console.log("tarefas: ", newTaskList)
// }

// addTaskToList()


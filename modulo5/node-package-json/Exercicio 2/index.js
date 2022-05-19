
/*- **Exercício 2**

Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos. */
// RESPOSTA + DESAFIO
const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

const functionMath = () => {
    if (operation && firstNumber && !secondNumber) {
        return `Esperava 3 parâmetros só recebi 2!!!`
    } else if (operation && !firstNumber && !secondNumber) {
        return `Esperava 3 parâmetros só recebi 1`
    } else {
        if (operation === "add") {
            const result = firstNumber + secondNumber
            return `Resposta: ${result}`
        } else if (operation === "sub") {
            const result = firstNumber - secondNumber
            return console.log`Resposta: ${result}`
        } else if (operation === "div") {
            const result = firstNumber / secondNumber
            return `Resposta: ${result}`
        } else if (operation === "mult") {
            const result = firstNumber * secondNumber
            return `Resposta: ${result}`
        }

    };

};
console.log("\x1B[1m", "\x1B[32m", functionMath())


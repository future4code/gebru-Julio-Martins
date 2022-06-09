/*- **Exercício 1**
    
    a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?

    Resposta: process.argv[2], process.argv[3], o índice depende de 
    qual argumento deseja acessar. 
    
    b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
    Resposta:*/

/*c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
"Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"*/

// REPOSTA B e C + DESAFIO


const name = process.argv[2];
const age = Number(process.argv[3]);

if (name && age) {
    console.log("\x1B[1m", "\x1b[32m", `Olá, ${name}! Você tem ${age} anos.`)
    console.log("\x1B[1m", "\x1B[34m", `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)
} else if (name && !age) {
    console.log("\x1B[1m", "\x1B[36m", `Esperava 2 parâmetros e só recebi 1`)
} else {
    console.log("\x1B[1m", "\x1B[35m", `Não recebi nenhum parâmetro`)
}


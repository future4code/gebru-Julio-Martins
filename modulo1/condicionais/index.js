/*Exercícios de interpretação de código
1-
A: Ele vai fazer testar o numero escolhido pelo usuario para ver se é par ou impar
B: Numeros par
C: Numeros impar

2-
A: Para saber o preço da fruta escolhida pelo usuario
B:O preço da fruta, maçã é R$ 2.25
C: O preço da fruta  Pêra  é  R$  5

3-
A:Está perguntando um numero ao usuario
B: Se ele digitou 10 : Esse número passou no teste e se ele digitar -10 não vai acontecer nada 
C: Vai dar erro na linha 8, se não me engano pelo console.log estar fora da chaves do if 

Exercícios de escrita de código
1-
A:*/
// const podeDirigir = Number(prompt("Qual sua idade? "))
// /*B: Já ta garantido
// C*/
// if (podeDirigir >= 18) {
//     console.log("Você pode dirigir")
// }
// else if (podeDirigir < 18) {
//     console.log("Você não pode dirigir")
// }

/*2-*/
// const turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
// if (turno == "M") {
//     console.log("Bom dia!")
// }
// else if (turno == "V") {
//     console.log("Boa tarde!")
// }
// if (turno == "N") {
//     console.log("Boa noite!")
// }

/*3-*/
// const turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
// switch (turno) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
// }

/*4- */
// const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
// const cinema = (generoFilme, valorIngresso) => {
//     if (generoFilme == "fantasia" && valorIngresso <= 15) {
//         const lanchinho = prompt("Qual snack que você quer comprar?")
//         console.log("Bom filme!")
//         console.log(`Aproveite o seu ${lanchinho} `)
//     }
//     else {
//         console.log("Escolha outro filme :(")
//     }

// }
// cinema(generoFilme, valorIngresso)

/*Desafios
1- Está implementado na questão 4

2-*/
const nome = prompt("Qual o seu nome completo?")
const tipo = prompt("Qual o tipo de jogo: IN ou DO").toUpperCase()
const etapa = prompt(" Qual a etapa: SF , DT ou FI").toUpperCase()
const categoria = Number(prompt("Qual a categoria: 1, 2, 3, 4"))
const quantIngressos = Number(prompt("Quantos ingressos?"))


/*Exercícios de interpretação de código
1- A: Está fazendo a multiplicação da variavel por 5

B: Se retirar o console.log e só colocar a função não vai acontecer nada!

2- A: Vai retornar "true ou false" já que tem o includes, exatamente oque ta escrito ali é só para 
confirmar se um determinado elemento está no texto.

B: I true II true III false */ 

/*Exercícios de escrita de código
1- A: */ 
// function frase (){
//     console.log ("Eu sou Júlio, tenho 30 anos, moro em Piracicaba-SP e sou estudante.")}

// //B:
// frase()
// function frase2 (nome , idade, cidade , profissao) {
// const info = `Eu sou ${nome} , tenho ${idade} anos, moro em ${cidade} e sou ${profissao}. `
// return info}
// console.log(frase2("Júlio", 30 , "Piracicaba-SP" , "estudante"))

//2- A:
// const somar = (num1 , num2) => {
// return num1 + num2}
// const igual = ( num1 >= num2)
// console.log (somar(5 ,5))

//B: 
// const somar = (num1 , num2) => (num1 >= num2)
// console.log (somar(3,5)) 

//C:
// const parOuImpar = num1 => num1 % 2 === 0
// console.log (parOuImpar(8) , "É Par amore" )

//D:
// const mensagem = frase => {
//     console.log (frase.length , frase.toUpperCase()) 
// }
// mensagem ("Às vezes é melhor estar morto")

//3- 
// const soma = (num1 , num2) => { 
//     return num1 + num2
// }
// const subtrair = (num1 , num2) => { 
//     return num1 - num2
// }
// const multiplicar= (num1 , num2) => { 
//     return num1 * num2
// }
// const divisao = (num1 , num2) => { 
//     return num1 / num2
// }
// let num1 = Number(prompt("escolha um numero!"))
// let num2 = Number(prompt("escolha outro numero!"))

// console.log (`Números inseridos: ${num1} e ${num2} `)
// console.log (`Soma: ${soma(num1, num2)}`)
// console.log (`subtrair: ${subtrair(num1, num2)}`)
// console.log (`Multiplicar: ${multiplicar(num1, num2)}`)
// console.log (`Dividir: ${divisao(num1, num2)}`)

/*Desafios
 1- A:*/
//  const arrow = (numero) => {
//      console.log (numero)
//  }
//B:
//  const arrow2 = (numero1 , numero2) => {
//      const  soma = (numero1 + numero2)
//      arrow (soma)

    
// }
arrow2 (15, 15)
const calcularHipotenusa = (ladoA , ladoB) =>{
    const hipotenusa = (Math.pow(ladoA , 2) + (Math.pow(ladoB , 2)))
    return Math.sqrt(hipotenusa)
    
}
console.log (calcularHipotenusa(4, 3))

//Salvando
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*QUESTÃO 1:
A- false
B- false
C- true
D-boolean
Não sei se podia, mas fui olhar os slides '-' */

//QUESTÃO 2:
//Vai aparecer uma string e não a soma já que ele não fez a conversão para number. 


//QUESTÃO 3:
// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))
// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// EXERCÍCIOS DE ESCRITA DE CÓDIGO

/* QUESTÃO 1:
let suaIdade = Number (prompt("Qual a sua idade?"))
let amigaIdade = Number (prompt("Qual a idade da sua melhor amiga?"))
let soma = suaIdade + amigaIdade
let subtracao = suaIdade - amigaIdade
let comparacao = suaIdade < amigaIdade
comparacao = suaIdade > amigaIdade
console.log(soma)
console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > amigaIdade)
console.log ("Diferença de idade" ,subtracao)*/

// QUESTÃO 2:
// const numeroPar = prompt("Insira aqui um número PAR")
// console.log (numeroPar % 2)
/*C- Tem um padrão de ser sempre 0 ao colocar um numero par
D- Tem sempre um padrão de ser 1 ao colocar um numero impar */

// QUESTÃO 3:
// const qualIdade = prompt("Qual a sua idade?")
// const meses = "12"
// const dias = "365"
// const horas = "24"
// console.log ("Idade em meses" , qualIdade * meses)
// console.log ("Idade em dias" , (qualIdade * meses) * dias)
// console.log ("Idade em horas" , ((qualIdade * meses) * dias) * horas)

// QUESTÃO 4:

// let numero1 = Number (prompt("Escolha um numero"))
// let numero2 = Number (prompt("Escolha outro numero"))
// console.log("O primeiro numero é maior que segundo?" , numero1 > numero2)
// console.log("O primeiro numero é igual ao segundo?" , numero1 < numero2)
// console.log("O primeiro numero é divisível pelo segundo?" , numero1 % numero2 === 0) 
// console.log("O segundo numero é divisível pelo primeiro?" , numero2 % numero1 === 0)

// DESAFIOS

/* 1
A-*/
// const fahrenheitKelvin = (77 - 32)*(5/9) + 273.15
// console.log ("Valor de 77°F é de:", fahrenheitKelvin,"K")

// //B- 
// const celsiusFahrenheit = (80)*(9/5) + 32
// console.log ("Valor de 80°C é de:" , celsiusFahrenheit,"°F")

//C- 
// const celsius = 30
// const celsiusF = (celsius)*(9/5) + 32
// const fahrenheitK = (celsiusF - 32)*(5/9) + 273.15
// console.log ("Valor de 30°C é de:" , celsiusF,"°F")
// console.log ("Valor de 30°C é de:" , fahrenheitK,"k")

//D-
// let celsius = Number (prompt("Digite o °Celsius que queira converte!"))
// let celsiusF = (celsius)*(9/5) + 32
// let fahrenheitK = (celsiusF - 32)*(5/9) + 273.15
// console.log ("Valor de 30°C é de:" , celsiusF,"°F")
// console.log ("Valor de 30°C é de:" , fahrenheitK,"°k")
// alert(`Valor em Fahrenheit ${celsiusF}`)

/* 2
A-*/
// const realQuilo = "0.05"
// const quiloHora = "280"
// const valorTotal = realQuilo * quiloHora
// const desconto = "0.15"
// console.log ("O valor gasto ao consumir 280 Quilowatt-hora é:" , valorTotal )

// // B-
// console.log (`O valor gasto com desconto é: ${valorTotal - (valorTotal * desconto)}`) 

//3
let lb = "20"
let oz = "10.5"
let mi = "100"
let ft = "50"
let gal = "103.56"
let xic = "450"
let libra = "2.205"


//A- 
let lbParaKg = (lb / 2.205)
console.log ("20lb equivalem a" , lbParaKg.toFixed(2) , "kg")

//B-
let ozParaKg = (oz / 35.274)
console.log ("10.5 oz equivalem a" , ozParaKg.toFixed(2) , "kg")

//C-
let miParaMetros = (mi * 1606)
console.log ("100mi equivalem a" ,miParaMetros , "Metros")

//D-
let pesParaMetros = ft / 3.281
console.log ("50ft equivalem a" ,pesParaMetros.toFixed(2) , "Metros")

//E- 
let galParaLitro = gal * 3.785
console.log ("103.56gal equivalem a" ,galParaLitro.toFixed(2) ,"L")

//F-
let xicParaLitros = xic * 0.24
console.log ("450 xic equivalem a" ,xicParaLitros ,"L")

//G-
let converter = Number (prompt("Digite um valor em Libras para converter em KG "))
console.log ("Equivalem a:" , (converter / libra).toFixed(2))
alert(`Equivalem a: ${converter / libra}`)



//Só para fazer um novo save

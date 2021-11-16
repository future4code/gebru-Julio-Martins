// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt ("Vamos calcular a área de um retangulo, qual a altura?")
  let largura = prompt ("Qual a largura?")
  const calculaAreaRetangulo = altura * largura
  console.log (calculaAreaRetangulo)
  return calculaAreaRetangulo
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt ("Qual o ano atual?")
  let anoDeNascimento = prompt ("Qual ano nasceu?")
  const imprimeIdade = (anoAtual - anoDeNascimento)
  console.log (imprimeIdade)
    return imprimeIdade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calculaIMC = (peso / (altura * altura)).toFixed(1)
  return (calculaIMC)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  // implemente sua lógica aqui
  const nome = prompt ("Qual o seu nome?")
  const idade = prompt ("Qual a sua idade?")
  const email = prompt ("Qual o seu email?")
  const imprimeInformacoesUsuario = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log (imprimeInformacoesUsuario)
  return (imprimeInformacoesUsuario)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt ("Fale uma cor favorita")
  const cor2 = prompt ("Fale mais uma cor favorita")
  const cor3 = prompt ("Fale e outra cor favorita")
  const imprimeTresCoresFavoritas = ([`${cor1}`, `${cor2}`, `${cor3}`])
  console.log (imprimeTresCoresFavoritas)
  return (imprimeTresCoresFavoritas)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

console.log ((string).toUpperCase())
return ((string).toUpperCase())



 
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calculaIngressosEspetaculo = (custo / valorIngresso)
  console.log (calculaIngressosEspetaculo)
  return (calculaIngressosEspetaculo)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 return (string1 >=string2)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return (array)[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const retornaUltimoElemento = ((array)[(array).length - 1])
  return (retornaUltimoElemento)

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let lastItem = (array.length -1)
  let trocaPrimeiroEUltimo =[array[lastItem], ...array.slice(1, lastItem), array[0]]
  console.log (trocaPrimeiroEUltimo)
  return (trocaPrimeiroEUltimo)


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (string1.localeCompare(string2, undefined, { sensitivity: 'base' }) === 0)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt ("Qual o ano atual?")
let anoDeNascimento = prompt ("Qual seu ano de nascimento?")
let identidade = prompt ("Qual ano sua carteira de identidade foi emitida")
let idade = anoAtual - anoDeNascimento
if (idade <= 20){
console.log((anoAtual - identidade)>=5)}
else if (idade >= 21){
console.log ((anoAtual - identidade)>=10)}
if (idade >= 51){
  console.log ((anoAtual - identidade)>=15)}
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let checaAnoBissexto = ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)))
    return (checaAnoBissexto)
  }

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt ("Você tem mais de 18 anos?")
  const ensino = prompt ("Você possui ensino médio completo?")
  const horario = prompt ("Você possui disponibilidade exclusiva durante os horários do curso?")
  const validade = (idade === "sim") && (ensino === "sim") && (horario === "sim")
  console.log (validade)
  return (validade)

}



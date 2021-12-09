// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    console.log(array.length)
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   /* Metodo normal*/
   return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    /*Metodo normal */
    function compararNumeros(a, b) {
        return a - b
    }
    return array.sort(compararNumeros)

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    /*Metodo Normal  */
    var pares = array.filter(par => (par % 2) === 0)
    return pares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayAoQuadrado = []
    for (numero of array) {
        if (numero % 2 === 0)
            arrayAoQuadrado.push(numero * numero)
    }
    return arrayAoQuadrado

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
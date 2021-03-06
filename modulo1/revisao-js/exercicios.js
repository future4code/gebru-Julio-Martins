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
    // return array.reverse()

    /*Desafio */

    var arraySecundario = []
    var len = array.length
    for (i = len; i != 0; i--) {
        arraySecundario.push(array[i - 1])
    } return arraySecundario

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    /*Metodo normal */
    // function compararNumeros(a, b) {
    //     return a - b
    // }
    // return array.sort(compararNumeros)
    /*Desafio */
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    /*Metodo Normal  */
    // var pares = array.filter(par => (par % 2) === 0)
    // return pares

    /*Desafio */
    let arrayPares = []
    for (numero of array) {
        if (numero % 2 === 0)
            arrayPares.push(numero)
    }
    return arrayPares

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
    return Math.max.apply(Math, array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNum
    let menorNum
    if (num1 > num2) {
        maiorNum = num1
        menorNum = num2
    } else {
        maiorNum = num2
        menorNum = num1
    }

    let divisor = maiorNum % menorNum === 0
    const objetoEntreDoisNumeros = {
        maiorNumero: maiorNum,
        maiorDivisivelPorMenor: divisor,
        diferenca: (maiorNum - menorNum)
    }
    return objetoEntreDoisNumeros

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    var numPares = [0]
    for (let i = 0; i < n - 1; i++) {
        numPares.push(numPares[i] + 2)
    }
    return numPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo
    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipoTriangulo = "Isósceles"
    } else {
        tipoTriangulo = "Escaleno"
    }
    return tipoTriangulo

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    let novaArray = [array[array.length - 2], array[1]]
    return novaArray

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novaPessoa

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    for (pessoa of pessoas) {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            pessoasAutorizadas.push(pessoa)
        }
    } return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = []
    for (pessoa of pessoas) {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            pessoasNaoAutorizadas.push(pessoa)
        }
    } return pessoasNaoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (obj of contas) {
        for (compra of obj.compras) {
            obj.saldoTotal = obj.saldoTotal - compra
        }
        obj.compras = []
    } return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
    })
    return consultas

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
        const dataA = a.dataDaConsulta.split("/")
        const dataB = b.dataDaConsulta.split("/")

        const dataFinalA = new Date(+dataA[2], dataA[1] - 1, +dataA[0]);
        const dataFinalB = new Date(+dataB[2], dataB[1] - 1, +dataB[0]);

        if (dataFinalA < dataFinalB) {
            return -1;
        } else {
            return true;
        }
    })

    return consultas

}
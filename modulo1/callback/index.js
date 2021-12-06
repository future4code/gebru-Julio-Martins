//----------Exemplo da aula callback--------------

// const verificaParEDivide = (numero, imprimir) => { //colocaremos a funcão como paramentro
//     if (numero % 2 === 0) {/* % divide mas nos mostra o resto da divisão */
//         const resultado = numero / 2
//         imprimir(resultado) //chamaremos a funcao2 dentro do if da funcão1
//     }
// }

// const impressao = (valor) => {
//     console.log("Resultado", valor)
// }
// verificaParEDivide( 12 , impressao)

//--------------------Exercicio 1 da aula  ---------------------
// const verificaImpar = (numero, imprimir) =>{
//     if (numero !== 0 ){
//         imprimir ()
//     }
// }
// const impressao = ()=>{
//     console.log ("É impar")

// }
// verificaImpar(17 , impressao)


/* ----------- Exemplo função de Array -------------
Temos: map() e filter ()
*/
//--------------------MAP--------------

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//    ]
// const retornaNome = (pokemon)=>{
// return pokemon.nome
// }
// const retornaNome2 = (pokemons) =>{
//     const nomesPokemons = pokemons.map(retornaNome)
//     return nomesPokemons
// }
// console.log (retornaNome2(pokemons))


//------------Exercicio 2 da aula --------------

// const listaDeNumeros = [10, 11, 12, 13, 14, 15]
// const novoArray = listaDeNumeros.map( (valor, index) =>{
//     return `o elemento ${index} é ${valor}`
// }
// )
// console.log(novoArray)

//-----------------Filter ---------------------

// ---------------- Exercicio 3 da aula-----------------
// const listaDeNumeros = [1, 2, 5, 8, 10, 11 , 13, ,15,20]
// const novoArray = listaDeNumeros.filter((numero)=>{
//     return numero > 10
// })
// console.log (novoArray)

// const numerosPares = listaDeNumeros.filter((numero)=>{
//     return numero % 2 === 0
// })
// console.log(numerosPares)

// -------------------Exercicio 4 da aula ----------------------
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
//    ]
//    const pegarProdutosLimpeza = (produto) =>{
//        return produto.categoria === "Limpeza"
//    }
//    const produtosLimpeza = produtos.filter(pegarProdutosLimpeza)
//    console.log(produtosLimpeza)

//    const nomesProdutosLimpeza = produtosLimpeza.map((produto)=>{
//        return produto.nome
//    })
//    console.log(nomesProdutosLimpeza)

/* -----------------Exercícios de interpretação de código -----------------
1-
A: Vai ser impresso o item que são os nomes e apelidos, o index 0, 1, 2 e por fim o array completo

2-
A: Vai ser impresso somente os nomes

3-
A: Vai ser impresso os objetos que não contenham Chijo 

Exercícios de escrita de código

1-                         Exercicio
*/
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
//A:
const arrayPetsA = pets.map((item) => {
    return item.nome
})
console.log(arrayPetsA)

//B:
const arrayPetsB = pets.filter((item, index, array) => {
    return (item.raca === "Salsicha")
})
console.log(arrayPetsB)

//C:
const arrayPetsC = pets.filter(item => item.raca === "Poodle")
    .map(item => console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`))


//2 -                         Exercicio
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//A:
const novoArrayA = produtos.map((item) => {
    return item.nome
})
console.log(novoArrayA)

//B:
const novoArrayB = produtos.map((item, index, array) => {
    return { nome: item.nome, preco: (item.preco * 0.95).toFixed(2) }
})
console.log(novoArrayB)

//C:
const novoArrayC = produtos.filter((item, index, array) => {
    return (item.categoria === "Bebidas")
})
console.log(novoArrayC)

//D:
const novoArrayD = produtos.filter((item, index, array) => {
    return (item.nome.includes("Ypê"))
})
console.log(novoArrayD)

//E:
const novoArrayE = novoArrayD.map((item, index, array) => {
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(novoArrayE)

/*---------------------------Desafios-------------------
1-*/
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//A: 
const pokemonsA = pokemons.map ((item)=>{
    return item.nome
})
console.log(pokemonsA.sort())

//B:
const pokemonsB = pokemons.map((item)=> item.tipo)
console.log (new Set(pokemonsB))

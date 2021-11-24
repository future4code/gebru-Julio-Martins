//Exercícios de interpretação de código
/*1-
A: Matheus Naschtergaele 
Virginia Cavendish //Essa aqui sinceramente olhei no console. 
Canal: Globo, horario: 14h

2-
A: nome: Juca, idade: 3, raça SRD . 
A: nome: Juba, idade: 3, raça: SRD
A: nome: Jubo, idade? 3, raça:SRA

B: Faz uma copia 

3-
A: False 
A: undefined // Olhei no console pois achava que iria dar Null

B: No primeiro console deu False pois é oque foi atribuido pra voltar. Parando pra pensar deu undefined pois não teve nenhum valor atribuido, não sei de onde tirei que era NULL. 

-----------------------------------------------------------

Exercícios de escrita de código
1-
A:*/
// const pessoa = {
//     nome: "Giovanni",
//     apelido: ["Gigi", "Gi", "Gio"],
// };
// const fraseApelido = (pessoa) => {
//  console.log (`Eu sou ${pessoa.nome},mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)
// };
// fraseApelido(pessoa)

// //B:
// const novaPessoa = {
//     ...pessoa,
//     apelido: ["Gatinho", "Princeso", "Nenem"],
// };
// fraseApelido(novaPessoa)

//-----------------------------------------------------------------------------------------

/*2-
A:*/
// const objeto1 = {
//     nome: "Júlio Cesar",
//     idade: 30,
//     profissao: "Estudante"
// }
// const objeto2 = {
//     nome: "Ana Carolina",
//     idade: 32,
//     profissao: "Professora"
// }
// //B:
// let array1 = []
// let array2 = []
// const objetos = (objeto1, objeto2) => {
//     array1.push(objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length)
//     array2.push(objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length)
//     let array3 = [array1, array2]
//     return array3
// }
// console.log(objetos(objeto1, objeto2))


/*3-
// A:*/
const carrinho = []

//B:
const fruta1 = {nome: "Kiwi", disponibilidade:"true"}
const fruta2 = {nome: "manga", disponibilidade:"true"}
const fruta3 = {nome: "morango", disponibilidade:"true"}

//C: 
const carrinho2 = frutas => carrinho.push(frutas)
carrinho2(fruta1)
carrinho2(fruta2)
carrinho2(fruta3)

//D:
console.log(carrinho)

//Exercicio do desafio.
const estoque = (fruit) => {
    fruit.estoque = !fruit.estoque
    return fruit
}
console.log(estoque(carrinho[0]))

/* ------------------------------------------------------- 

Desafios

1-*/
// const perguntas = () => {
//     const nome = prompt("Qual seu nome?")
//     const idade = Number(prompt("Qual sua idade?"))
//     const profissao = prompt("Qual sua profissao?")

//     const usuario = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }
//     console.log(usuario, typeof usuario)
// }
// perguntas()

//2-
// const filme = () => {
//     const filme1 = {
//         anoDeLancamento: 1972,
//         nomeDoFilme: "The Godfather"
//     }
//     const filme2 = {
//         anoDeLancamento: 1990,
//         nomeDoFilme: "Os Bons companheiros"
//     }
//     console.log (`O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento > filme2.anoDeLanchamento}`)
//     console.log (`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento === filme2.anoDeLanchamento}`)
// }
// filme()
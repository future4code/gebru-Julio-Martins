
// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

// RESPOSTA:

const minhaString: string = "Oq estou fazendo aqui :/"; 
// Ao tentar atribuir um numero na variável minhaString, é indicado o erro:
//  "O tipo 'number' não pode ser atribuído ao tipo 'string'."


// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? Ou seja, 
// como criamos no typescript uma variável que aceite mais de um tipo de valor?

//REPOSTA: 

let meuNumero: string|number = 666
meuNumero = "666"



// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// RESPOSTA:

type Pessoa ={
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: Pessoa = {
    nome: "Júlio",
    idade: 31,
    corFavorita: "Roxo"
}

const pessoa2: Pessoa = {
    nome: "Carol",
    idade: 33,
    corFavorita: "Preto"
}

const pessoa3: Pessoa = {
    nome: "Giovanni",
    idade: 1,
    corFavorita: "Laranja"
}
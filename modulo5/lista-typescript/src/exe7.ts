type Produtos = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}[];

const estoqueAtual: Produtos = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
];

const produtosOrdenados = (array: Produtos): Produtos => {
    const valorEmReais: Produtos = array.sort((a, b) => {
        return a.quantidade - b.quantidade
    }).map(item => {
        return {...item, valorUnitario: (item.valorUnitario as number).toFixed(2).replace('.', ',')}
    })

    return valorEmReais
};

console.table(produtosOrdenados(estoqueAtual));
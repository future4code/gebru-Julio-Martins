type Clientes = {
	cliente: string,
	saldoTotal: number,
	debitos: number[]
}[];

const clientesDoBanco: Clientes = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const clientesEmNegativo = (array: Clientes): Clientes => {
	return array.filter((item) => {
		const somaDebitos = item.debitos.reduce((soma, valor) =>
			soma + valor, 0)
		item.saldoTotal = item.saldoTotal - somaDebitos
		if (item.saldoTotal < 0) {
			item.debitos.splice(0)
			return true
		}
	})
};

console.log(clientesEmNegativo(clientesDoBanco));
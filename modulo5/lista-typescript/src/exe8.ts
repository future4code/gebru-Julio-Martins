const precisaRenovarCateira = (dataNascimento: string, dataEmissao: string): boolean => {
    const dataAtual: Date = new Date;
    const arrayDataNascimento: string[] = [];
    const dataNascimentoSplit: string[] = dataNascimento.split("/");
    arrayDataNascimento.push(dataNascimentoSplit[1], dataNascimentoSplit[0], dataNascimentoSplit[2]);
    const dataNascimentoFormatada: number = new Date(Date.parse(arrayDataNascimento.join("/"))).getTime();
    const idade: number = Math.floor((dataAtual.getTime() - dataNascimentoFormatada) / 31536000000)
    const arrayDataEmissao: string[] = [];
    const dataEmissaoSplit: string[] = dataEmissao.split("/");
    arrayDataEmissao.push(dataEmissaoSplit[1], dataEmissaoSplit[0], dataEmissaoSplit[2]);
    const dataEmissaoFormatada: number = new Date(Date.parse(arrayDataEmissao.join("/"))).getTime();
    const emissaoEmAnos: number = Math.floor((dataAtual.getTime() - dataEmissaoFormatada) / 31536000000)

    if (idade <= 20 && emissaoEmAnos >= 5 || idade > 20 && idade <= 50 && emissaoEmAnos >= 10 || idade > 50 && emissaoEmAnos >= 15) {
        return true
    } else {
        return false
    }
};

console.log(precisaRenovarCateira("05/01/1991", "29/05/2022"));
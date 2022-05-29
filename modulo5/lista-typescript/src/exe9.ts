const retornarQuantidadeDeAnagramas = (palavra: string): number => {
    let fatorial: number = 1;
    let numero: number = palavra.length

    while (numero >= 1) {
        fatorial = fatorial * numero;
        numero--;

    }
    return fatorial
};

console.log(retornarQuantidadeDeAnagramas("Giovanni"));
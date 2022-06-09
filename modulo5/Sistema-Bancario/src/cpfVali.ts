import { Client } from "./data";

export const cpfFormatValidate = (cpf: string): void => {
    const formatCondition1: boolean = cpf.length !== 14 || cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== "-";
    if (formatCondition1) {
        throw new Error("CPF não está no formato solicitado: XXX.XXX.XXX-XX");  
    };

    let formatCondition2: boolean = false

    for(let i: number = 0; i < 14; i++) {
        if (i !== 3 && i !== 7 && i !== 11) {
            let isString: boolean = isNaN(Number(cpf[i]));
            if (isString) {
                formatCondition2 = true
            };
        };
    };

    if (formatCondition2) {
        throw new Error("Algum(s) caractere(s) do CPF não é (são) não numérico(s)");  
    };
};

export const findCpf = (cpf: string, dataBank: Client[]): Client | undefined => {
    const result = dataBank.find(client => client.cpf === cpf);
    return result;
};
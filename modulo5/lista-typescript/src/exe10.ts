const cpf: string = "xxx.xxx.xxx-xx"

const verificarCPF = (cpf: string): boolean => {
    cpf = cpf.replace(".", "").replace(".", "").replace("-", "");

    if (cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" ||
        cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
        return false
    }

    let multiplicadorPrimeiroDV: number = 0;
    let divisorDe11: number = 0;

    for (let i = 1; i <= 9; i++) {
        multiplicadorPrimeiroDV = multiplicadorPrimeiroDV + Number(cpf.substring(i - 1, i)) * (11 - i)
        divisorDe11 = (multiplicadorPrimeiroDV * 10) % 11
    }

    if ((divisorDe11 == 10) || (divisorDe11 == 11)) {
        divisorDe11 = 0
    }
    
    if (divisorDe11 != Number(cpf.substring(9, 10))) {
        return false
    }

    let multiplicadorSegundoDV: number = 0;
    let divisorSegundoDV: number = 0

    for (let i = 1; i <= 10; i++) {
        multiplicadorSegundoDV = multiplicadorSegundoDV + Number(cpf.substring(i - 1, i)) * (12 - i);
        divisorSegundoDV = (multiplicadorSegundoDV * 10) % 11
    }

    if ((divisorSegundoDV == 10) || (divisorSegundoDV == 11)) {
        divisorSegundoDV = 0
    }

    if (divisorSegundoDV != Number(cpf.substring(10, 11))) {
        return false
    }

    return true;
};

console.log(verificarCPF("111.111.111-11"));
console.log(verificarCPF("145.382.206-20"));
console.log(verificarCPF("123.123.123-80"))
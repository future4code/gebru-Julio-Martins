const birthInfo = (name: string, bday: string):string =>{
    const arrayBday : string [] =bday.split("/");
    let month: string = ""
    if (arrayBday[1] === "01") {
        month = "Janeiro"
    } else if (arrayBday[1] === "02") {
        month = "Fevereiro"
    }else if (arrayBday[1] === "03") {
        month = "Março"
    }else if (arrayBday[1] === "04") {
        month = "Abril"
    }else if (arrayBday[1] === "05") {
        month = "Maio"
    }else if (arrayBday[1] === "06") {
        month = "Junho"
    }else if (arrayBday[1] === "07") {
        month = "Julho"
    }else if (arrayBday[1] === "08") {
        month = "Agosto"
    } else if (arrayBday[1] == "09") {
        month = "Setembro"
    } else if (arrayBday[1] === "10") {
        month = "Outubro"
    } else if (arrayBday[1] === "11") {
        month = "Novembro"
    } else if (arrayBday[1] === "12") {
        month = "Dezembro"
    }
    return `Olá me chamo ${name}, nasci no dia ${arrayBday[0]} do mês de ${month} do ano de ${arrayBday[2]}`;
}
console.log(birthInfo("Júlio", "05/01/1991"))
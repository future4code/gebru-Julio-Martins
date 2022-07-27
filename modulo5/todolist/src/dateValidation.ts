export const dateFormatValidate = (date: string): void => {
    const formatCondition1: boolean = date.length !== 10 || date[2] !== "/" || date[5] !== "/";
    if (formatCondition1) {
        throw new Error("A data não está no formato solicitado: DD / MM / AAAA");
    };

    const day: number = Number(date[0] + date[1]);
    const month: number = Number(date[3] + date[4]);
    const year: number = Number(date[6] + date[7] + date[8] + date[9]);

    const formatCondition2: boolean = isNaN(day) || isNaN(month) || isNaN(year);
    if (formatCondition2) {
        throw new Error("Algum(s) caractere(s) do dia, mês e / ou ano da data não é (são) não numérico(s)");
    };

    const formatCondition3: boolean = day === 0 || day > 31 || month === 0 || month > 12 || year === 0;
    if (formatCondition3) {
        throw new Error("Data inválida");
    };
};


export const pastDate = (date: string): number => {
    const getNowDate: number = new Date().getTime()
    
    const splitInformedDate: string[] = date.split("/");
    const informedDateTimeStamp: number = new Date(Number(splitInformedDate[2]), Number(splitInformedDate[1]) -1, Number(splitInformedDate[0]) +1).getTime();

    const isPastDate = getNowDate - informedDateTimeStamp;

    return isPastDate;
};

export const sqlFormatDate = (date: string): string => {
    const splitDate = date.split("/");
    const formatedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
    return formatedDate;
};

export const responseFormatDate = (date: string): string => {
    const dateToString = date.toLocaleString();
    const splitDate = dateToString.split(" ");
    const formatedDate = splitDate[0];
    
    return formatedDate;
};


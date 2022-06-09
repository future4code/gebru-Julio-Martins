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

export const isMinor = (birth: string): void => {
    const eightennYears: number = new Date(1988, 0, 1).getTime();
    const splitBirth: string[] = birth.split("/");
    const birthTimeStamp: number = new Date(Number(splitBirth[2]), Number(splitBirth[1]) - 1, Number(splitBirth[0])).getTime();
    const ageTimeStamp: number = Date.now() - birthTimeStamp;

    if (ageTimeStamp < eightennYears) {
        throw new Error("É necessário ter mais de 18 anos para abrir uma conta no LabeBank");
    };
};

export const pastDate = (date: string): number => {
    const getNowDate: number = new Date().getTime()

    const splitInformedDate: string[] = date.split("/");
    const informedDateTimeStamp: number = new Date(Number(splitInformedDate[2]), Number(splitInformedDate[1]) -1, Number(splitInformedDate[0]) +1).getTime();

    const isPastDate = getNowDate - informedDateTimeStamp;

    return isPastDate;
};

export const getDate = (): string => {
    const getDate = new Date().toLocaleString();
    const splitDate = getDate.split(" ");

    return splitDate[0];
}
export type Client = {
    name: string,
    cpf: string,
    birth: string,
    balance: number,
    statement: Transaction[]
};

export type Transaction = {
    value: number,
    date: string,
    description: OPERATION
};

export enum OPERATION {
    PAYMENT = "Pagamento de conta",
    TRANSFERPAID = "Transferencia paga",
    RECEIVEDTRANSFER= "Transferência recebida", 
    DEPOSIT = "Depósito em dinheiro"
};

export const dataBank: Client[]= [
    {
        name: "Júlio Cesar",
        cpf: "111.111.111-11",
        birth: "05/01/1991",
        balance: 2000,
        statement: [
            {
                value: 150,
                date: "10/01/2022",
                description: OPERATION.PAYMENT
            },
            {
                value: 1500,
                date: "12/02/2022",
                description: OPERATION.PAYMENT
            },
            {
                value: 5000,
                date: "13/02/2022",
                description: OPERATION.TRANSFERPAID
            },
            {
                value: 2000,
                date: "03/04/2022",
                description: OPERATION.RECEIVEDTRANSFER
            }
        ]
    },
    {
        name: "Ana Carolina",
        cpf: "222.222.222-22",
        birth: "30/01/1989",
        balance: 1000000,
        statement: [
            {
                value: 15000,
                date: "01/01/2022",
                description: OPERATION.DEPOSIT
            },
            {
                value: 90.99,
                date: "01/03/2022",
                description: OPERATION.PAYMENT
            },
            {
                value: 500,
                date: "08/02/2022",
                description: OPERATION.RECEIVEDTRANSFER
            },
            {
                value: 150,
                date: "20/02/2022",
                description: OPERATION.PAYMENT
            }
        ]
    },
    {
        name: "GIovanni",
        cpf: "333.333.333-33",
        birth: "13/01/2021",
        balance: 5000000,
        statement: [
            {
                value: 150000,
                date: "01/01/2022",
                description: OPERATION.DEPOSIT
            },
            {
                value: 90000,
                date: "01/03/2022",
                description: OPERATION.PAYMENT
            },
            {
                value: 5000,
                date: "08/02/2022",
                description: OPERATION.RECEIVEDTRANSFER
            },
            {
                value: 15000,
                date: "20/02/2022",
                description: OPERATION.PAYMENT
            }
        ]
    },

];
import { OPERATION, Transaction } from "./data";

export const newTransaction = (value: number, date: string, description: OPERATION): Transaction => {
    return {
        value,
        date,
        description
    };
};
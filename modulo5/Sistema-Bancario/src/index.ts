import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Client, dataBank, OPERATION, Transaction } from "./data";
import { cpfFormatValidate, findCpf } from "./cpfVali";
import { dateFormatValidate, getDate, isMinor, pastDate } from "./dateVali";
import { newTransaction } from "./newTrans";

const app: Express = express();
app.use(express.json());
app.use(cors());
const server = app.listen(3003, () => {
  if (server) {
    console.log("Server ta lisão");
  } else {
    console.error("Deu xibiu");
  }
});

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    res.status(200).send(dataBank);
  } catch (error: any) {
    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const cpf: string = req.params.cpf;
    const client: Client | undefined = findCpf(cpf, dataBank);

    if (!client) {
      errorCode = 404;
      throw new Error("Cliente não cadastrado");
    }
    const balance: number = client.balance;

    res.status(200).send({ saldo: balance });
  } catch (error: any) {
    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { name, cpf, birth } = req.body;

    if (!name || !cpf || !birth) {
      errorCode = 422;
      throw new Error("Informações incompletas");
    }

    if (typeof name !== "string" || name.length < 3) {
      errorCode = 422;
      throw new Error("Nome inválido");
    }

    if (typeof birth !== "string") {
      throw new Error("A data não está no formato solicitado: DD / MM / AAAA");
    }
    dateFormatValidate(birth);
    isMinor(birth);

    if (typeof cpf !== "string") {
      throw new Error("CPF não está no formato solicitado: XXX.XXX.XXX-XX");
    }
    cpfFormatValidate(cpf);
    const isClient: Client | undefined = findCpf(cpf, dataBank);
    if (isClient) {
      errorCode = 409;
      throw new Error("CPF informado já é cadastrado no LabeBank");
    }

    const newClient: Client = {
      name,
      cpf,
      birth,
      balance: 0,
      statement: [],
    };

    dataBank.push(newClient);

    res.status(201).send(dataBank);
  } catch (error: any) {
    if (
      error.message ===
        "A data não está no formato solicitado: DD / MM / AAAA" ||
      error.message ===
        "Algum(s) caractere(s) do dia, mês e / ou ano da data não é (são) não numérico(s)" ||
      error.message === "Data inválida" ||
      error.message ===
        "É necessário ter mais de 18 anos para abrir uma conta no LabeBank" ||
      error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
      error.message ===
        "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
    ) {
      res.status(422).send({ message: error.message });
    }

    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }

    res.status(errorCode).send({ message: error.message });
  }
});

app.put("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { name, cpf, addValue } = req.body;

    if (!name || !cpf || !addValue) {
      errorCode = 422;
      throw new Error("Informações incompletas");
    }

    if (typeof name !== "string" || name.length < 3) {
      errorCode = 422;
      throw new Error("Nome inválido");
    }

    if (typeof addValue !== "number" || addValue <= 0) {
      errorCode = 422;
      throw new Error("Valor para depósito inválido");
    }

    if (typeof cpf !== "string") {
      throw new Error("CPF não está no formato solicitado: XXX.XXX.XXX-XX");
    }
    cpfFormatValidate(cpf);
    const isClient = findCpf(cpf, dataBank);
    if (!isClient) {
      errorCode = 404;
      throw new Error("CPF informado não é cadastrado no LabeBank");
    }

    if (name !== isClient.name) {
      errorCode = 401;
      throw new Error("Nome informado não confere com o cadastrado");
    }

    const updateDataBank = dataBank.map((client) => {
      if (client.cpf !== isClient.cpf) {
        return client;
      } else {
        const date: string = getDate();
        const newStatement: Transaction = newTransaction(
          addValue,
          date,
          OPERATION.DEPOSIT
        );

        const newBalance: number = client.balance + addValue;

        const allStatement = client.statement;
        allStatement.push(newStatement);
        return { ...client, balance: newBalance, statement: allStatement };
      }
    });

    res.status(200).send(updateDataBank);
  } catch (error: any) {
    if (
      error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
      error.message ===
        "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
    ) {
      res.status(422).send({ message: error.message });
    }

    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }

    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users/payment", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    let { cpf, value, description, date } = req.body;
    if (!cpf || !description || !value) {
      errorCode = 422;
      throw new Error("Informações incompletas");
    }

    if (typeof cpf !== "string") {
      throw new Error("CPF não está no formato solicitado: XXX.XXX.XXX-XX");
    }
    cpfFormatValidate(cpf);
    const isClient = findCpf(cpf, dataBank);
    if (!isClient) {
      errorCode = 404;
      throw new Error("CPF informado não é cadastrado no LabeBank");
    }

    if (typeof value !== "number" || value <= 0) {
      errorCode = 422;
      throw new Error(
        "Valor do pagamento informado deve ser numérico e maior que zero"
      );
    }

    if (value > isClient.balance) {
      errorCode = 403;
      throw new Error("Valor do pagamento ultrapassa o saldo");
    }

    if (
      typeof description !== "string" ||
      description.toUpperCase() !== "PAGAMENTO"
    ) {
      errorCode = 422;
      throw new Error(
        "Descrição da operação é inválida. Para essa operação, informar apenas: PAGAMENTO"
      );
    }

    if (!date) {
      date = getDate();
    } else {
      if (typeof date !== "string") {
        throw new Error(
          "A data não está no formato solicitado: DD / MM / AAAA"
        );
      }
      dateFormatValidate(date);
      const isPast = pastDate(date);
      if (isPast > 0) {
        errorCode = 422;
        throw new Error("A data informada do pagamento já passou");
      }
    }

    const updateDataBankStatement: Client[] = dataBank.map((client) => {
      if (client.cpf !== cpf) {
        return client;
      } else {
        const allStatement = client.statement;

        const newStatement: Transaction = newTransaction(
          value,
          date,
          OPERATION.PAYMENT
        );
        allStatement.push(newStatement);

        return { ...client, statement: allStatement };
      }
    });

    res.status(201).send(updateDataBankStatement);
  } catch (error: any) {
    if (
      error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
      error.message ===
        "Algun(s) caractere(s) do CPF não é (são) não numérico(s)" ||
      error.message ===
        "A data não está no formato solicitado: DD / MM / AAAA" ||
      error.message ===
        "Algum(s) caractere(s) do dia, mês e / ou ano da data não é (são) não numérico(s)" ||
      error.message === "Data inválida"
    ) {
      res.status(422).send({ message: error.message });
    }

    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }

    res.status(errorCode).send({ message: error.message });
  }
});

app.put("/users/transactions", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const cpf: string = req.body.cpf;
    if (!cpf) {
      errorCode = 401;
      throw new Error("Não foi informado um cpf");
    }
    cpfFormatValidate(cpf);
    const isClient = findCpf(cpf, dataBank);
    if (!isClient) {
      errorCode = 404;
      throw new Error("CPF informado não é cadastrado no LabeBank");
    }

    const updatePaymentsBalance = dataBank.map((client) => {
      if (client.cpf !== cpf) {
        return client;
      } else {
        let discount: number = 0;
        const statement: Transaction[] = client.statement;

        for (let i: number = 0; i < statement.length; i++) {
          let isPast = pastDate(statement[i].date);
          if (isPast > 0) {
            if (statement[i].description === OPERATION.RECEIVEDTRANSFER) {
              discount += statement[i].value;
            } else {
              discount -= statement[i].value;
            }
          }
        }

        return { ...client, balance: client.balance + discount };
      }
    });

    res.status(200).send(updatePaymentsBalance);
  } catch (error: any) {
    if (
      error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
      error.message ===
        "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
    ) {
      res.status(422).send({ message: error.message });
    }

    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }

    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users/transfer", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { cpfPayer, namePayer, value, cpfReceiver, nameReceiver } = req.body;
    if (!cpfPayer || !namePayer || !value || !cpfReceiver || !nameReceiver) {
      errorCode = 422;
      throw new Error("Informações incompletas");
    }

    if (typeof cpfPayer !== "string" || typeof cpfReceiver !== "string") {
      errorCode = 422;
      throw new Error("Um ou dois dos CPFs informados são inválidos");
    }

    cpfFormatValidate(cpfPayer);
    const clientPayer = findCpf(cpfPayer, dataBank);
    if (!clientPayer) {
      errorCode = 404;
      throw new Error("CPF informado não é cadastrado no LabeBank");
    } else {
      if (clientPayer.name !== namePayer) {
        errorCode = 401;
        throw new Error("Nome do pagador não confere com o cadastrado");
      }
    }

    cpfFormatValidate(cpfPayer);
    const clientReceiver = findCpf(cpfReceiver, dataBank);
    if (!clientReceiver) {
      errorCode = 404;
      throw new Error("CPF informado não é cadastrado no LabeBank");
    } else {
      if (clientReceiver.name !== nameReceiver) {
        errorCode = 401;
        throw new Error("Nome do pagador não confere com o cadastrado");
      }
    }

    if (typeof value !== "number" || value <= 0) {
      errorCode = 422;
      throw new Error(
        "Valor do pagamento informado deve ser numérico e maior que zero"
      );
    }

    if (value > clientPayer.balance) {
      errorCode = 403;
      throw new Error("Valor do pagamento ultrapassa o saldo");
    }

    const date = getDate();

    const newStatementPayer: Transaction = newTransaction(
      value,
      date,
      OPERATION.TRANSFERPAID
    );
    const newStatementReceiver: Transaction = newTransaction(
      value,
      date,
      OPERATION.RECEIVEDTRANSFER
    );

    const updateDataBankStatement: Client[] = dataBank.map((client) => {
      if (client.cpf !== cpfPayer && client.cpf !== cpfReceiver) {
        return client;
      } else if (client.cpf === cpfPayer) {
        const allStatement: Transaction[] = client.statement;
        allStatement.push(newStatementPayer);
        return { ...client, statement: allStatement };
      } else {
        const allStatement: Transaction[] = client.statement;
        allStatement.push(newStatementReceiver);
        return { ...client, statement: allStatement };
      }
    });

    res.status(201).send(updateDataBankStatement);
  } catch (error: any) {
    if (
      error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
      error.message ===
        "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
    ) {
      res.status(422).send({ message: error.message });
    }

    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }

    res.status(errorCode).send({ message: error.message });
  }
});

import express from "express";
import cors from "cors";
import { dataProducts } from "./data";

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("Server ta lisão")
})

// Exercício 1
app.get("/test", (req, res) => {
    res.status(200).send("Ta funfando");
});

// Exercício 3 e 7
app.post("/products", (req, res) => {
    try{
        const name = req.body.name;
        const price = req.body.price;

        const newProduct = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        if (!newProduct.name || typeof newProduct.name !== "string") {
            throw new Error("Nome do produto inválido.");
        };
        if (!newProduct.price || typeof newProduct.price !== "number") {
            throw new Error("Preço do produto inválido.");
        };
        if (newProduct.price <= 0) {
            throw new Error("Preço do produto deve ser maior ou igual a zero.");
        }

        dataProducts.push(newProduct);
        res.status(201).send({dataProducts});

    } catch (error : any) {
        switch (error.message) {
            case "Nome do produto inválido.":
                res.status(422).send(error.message);
                break;
            case "Preço do produto inválido.":
                res.status(422).send(error.message);
                break;
            case "Preço do produto deve ser maior ou igual a zero.":
                res.status(422).send(error.message);
                break;
            default:
                res.status(500).send(error.message);
                break;
        };
    };

});

// Exercício 4
app.get("/products", (req, res) => {
    res.status(200).send({dataProducts});
});

// Exercício 5 e 8
app.put("/products/:id", (req, res) => {
    try {
        const id = req.params.id;
        const newPrice = req.body.price;

        if (!newPrice) {
            throw new Error("Valor do novo preço não recebido.");
        }
        if (typeof newPrice !== "number") {
            throw new Error("Valor do novo preço deve ser numérico.");
        }
        if (newPrice <= 0) {
            throw new Error("Valor do novo preço deve ser maior ou igual a zero.");
        }

        let findId = false;

        const updateList = dataProducts.map(product => {
            if ( product.id === id ) {
                findId = true
                return {... product, price: newPrice};
            } else {
                return product
            }
        });

        if (!findId) {
            throw new Error("Produto não encontrado. Informar id válido.")
        }
    
        res.status(200).send({updateList});
    } catch (error : any) {
        switch (error.message) {
            case "Valor do novo preço não recebido.":
                res.status(422).send(error.message);
                break;
            case "Valor do novo preço deve ser numérico.":
                res.status(422).send(error.message);
                break;
            case "Valor do novo preço deve ser maior ou igual a zero.":
                res.status(422).send(error.message);
                break;
            case "Produto não encontrado. Informar id válido.":
                res.status(422).send(error.message);
                break
            default:
                res.status(500).send(error.message);
                break;
        };
    }
});

// Exercício 6 e 9
app.delete("/products/:id", (req, res) => {
    try {
        const id = req.params.id;
        let findId = false;

        for (let product of dataProducts) {
            if (product.id === id) {
                findId = true
            }
        };

        if (!findId) {
            throw new Error("Produto para deletar não encontrado. Informar id válido.")
        }

        const updateList = dataProducts.filter(product => {
            return product.id !== id;
        });

        res.status(200).send({updateList});

    } catch (error: any) {
        switch (error.message) {
            case "Produto para deletar não encontrado. Informar id válido.":
                res.status(422).send(error.message);
                break;
            default:
                res.status(500).send(error.message);
                break;
        };
    }
});

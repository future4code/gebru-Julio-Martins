import express, {Request, Response} from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server ta lisão")
})
// ---------------------------------------------------//----------------------------------------------------
// Exercício 1

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello Labenu by: Juh")
})

// Exercício 2

type User = {
    id: string | number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercicio 3

const users: User[] = [
    {
        id: 1,
        name: "Júlio Cesar",
        phone: 123456789,
        email: "juli0cesar@ymail.com",
        website: "juliocesardev.com" 
    },
    {
        id: 2,
        name: "Ana Carolina",
        phone: 123456789,
        email: "caroltornisiello_teacher@hotmail.com",
        website: "teachercarol.com" 
    },
    {
        id: 3,
        name: "Giovanni",
        phone: 123456789,
        email: "giovanni@ymail.com",
        website: "giovanni.com" 
    }
]

// Exercício 4

app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Tem ninguém aqui bro.")
    }
    res.status(201).send(users)
})

// Exercício 5

type Post  = {
    id: string | number 
    title: string,
    body: string,
    userId: string | number 
}

//Exercicio 6
// São 5 horas da manhã e nem ferrando consigo pensar em algo pra escrever vlw flw.

const posts: Post [] = [
    {
        id: "01",
        title: "To morrendo de sono",
        body: "Quero terminar e ir domir logo.",
        userId: 1
    },
    {
        id: "02",
        title: "DORMINDO",
        body: "Já estou desmaiada",
        userId: 2
    },
    {
        id: "03",
        title: "Mimindo",
        body: "Estou de barriguinha pra cima capotado",
        userId: 3
    },
]

// Exercício 7

app.get("/posts", (req: Request, res: Response) => {

    if(!posts.length){
       res.status(401).send("Tem nada aqui não.")
    }

    res.status(201).send(posts)
})

// Exercício 8

app.get("/posts/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(post.length === 0) {
        return res.status(400).send("Num achei nada nessa birosca.")
     } 
        
        res.status(201).send(post)   
})

// --------------------------------------------DESAFIOS---------------------------------------------------

//Exercicio 9
//A vou dormir depois tento fazer 
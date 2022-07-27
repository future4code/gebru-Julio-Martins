import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
    console.log("ok!")
})

// Exercício 1

//a)  O raw responde com o resultado da query e outras infos que não interessam
// para entregar como response da request, por isso utiliza-se o result[0]

//b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0]
}
getActorByName("Juliana Paes")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

// c)
const countGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}';
    `)
    const count = result[0][0].count;
    return count;
}
countGender("female")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })



// Exercício 2
//a)
const updateSalary = async (salary: number, id: string): Promise<any> => {
    await connection("Actor")
        .update({ salary: salary })
        .where("id", id)
}

updateSalary(700000, "001" )
.then(result => {
  console.log("Salário atualizado.")
})
.catch(err => {
  console.log(err)
});

// b
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id)
};

deleteActor("001")
.then(result => {
  console.log("Ator deletado.")
})
.catch(err => {
  console.log(err)
});

// c)
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });

    return result[0].average;
  };

  avgSalary("female")
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    });


// Exercício 3
//a)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection("Actor")
      .select()
      .where("id", id)

  return result[0]
}
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
      const id = req.params.id;
      const actor = await getActorById(id);

      res.status(200).send(actor)
  } catch (err: any) {
      res.status(400).send({
          message: err.message,
      });
  }
});

  //b)
  const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .count()
        .where({gender})

    return result
}
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender;
        const actor = await getActorByGender(gender as string);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});



// Exercício 4
// a)
app.put("/actor", async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const salary = req.body.salary;
        await updateSalary(salary, id);

        res.status(200).send({ message:"Salary changed" })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

// b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteActor(id);

        res.status(200).send({ message: "Actor deleted" })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});
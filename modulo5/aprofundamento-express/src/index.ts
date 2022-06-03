import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { usersTask } from './data';

const app = express();

app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("Server ta lisão")
})

// ENDPOINTS

// Exercício 1
app.get("/ping", (req, res) => {
    res.send("Pong!");
});

// Exercício 4
app.get("/tasks/:completed", (req, res) => {
    const completedTasks = usersTask.filter(task => {
        return task.completed.toString() === req.params.completed;
    })
    res.send({completedTasks});
});

// Exercício 5
app.post("/tasks", (req, res) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const completed = req.body.completed;
    
    const newTask = {
        userId: userId,
        id: Date.now(),
        title: title,
        completed: completed
    };
    usersTask.push(newTask);

    res.send({usersTask});
});

// Exercício 6
app.put("/tasks/:id", (req, res) => {
    const taskId = req.params.id

    const newCompleted = usersTask.filter((task) => {
        return Number(taskId) === task.id
    }).map((task) => {
        if (task.completed === true) {
            return { userId: task.userId, id: task.id, title: task.title, completed: false }
        } else if (task.completed === false) {
            return { userId: task.userId, id: task.id, title: task.title, completed: true }
        }
    })
    console.log(newCompleted)
    res.status(201).send(newCompleted);
});


// Exrcício 7
app.delete("/tasks/:id", (req, res) => {
    const deletedTaskList = usersTask.filter(task => {
        return task.id !== Number(req.params.id);
    });

    res.send(deletedTaskList);
});

// Exercício 8
app.get("/tasks/user/:userId", (req, res) => {
    const userIdTasks = usersTask.filter(task => {
        return task.userId === Number(req.params.userId);
    });

    res.send(userIdTasks);
});

// Exercicio 9
//https://documenter.getpostman.com/view/19734677/Uz5GmvWW


const routes = require('express').Router();
const dbService = require('./database');
routes.get('/', (req, res) => { //Default route, nothing really happens here
    res.send("Entrypoint for the web api, Hello, i Get It!!");
});
routes.get('/getTodo/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await dbService.getTodo(id);
        if(todo) {
            res.send(todo);
        }
        else {
            throw new Error(`Could not fetch todo with id ${id}`);
        }
    } catch(error) {
        res.status(404)
            .json(error);
    }
});

routes.get('/getTodos', async (req, res) => {
    try {
        const todos = await dbService.getTodos();
        if(todos) {
            res.json(todos);
        }
        else {
            throw new Error(`Could not fetch todos.`);
        }
    } catch(error) {
        res.status(404)
            .json(error);
    }
});
routes.post('/saveTodo', async (req, res) => {
    const values = req.body;

    try {

        const username = values.username;
        const task = values.task;

        const result = await dbService.saveTodo(username, task);
        if(!result)
            throw new Error('Could not add a new task');

        res.send({
            message: 'New task inserted into tasks',
        })

    } catch(error) {
        res.status(404)
            .json(error);
    }
});
module.exports = routes;
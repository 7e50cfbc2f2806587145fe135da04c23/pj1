const Promise = require('bluebird');
const sqlite = require('sqlite');
const dbconfig = require("./settings.json");
const connectionConfig = {
    file : dbconfig.sqlite.file,
};
const dbPromise = sqlite.open(connectionConfig.file, { Promise });
module.exports = {
    getTodo : async (id) => {
        const db = await dbPromise;
        const query = "select * from tasks where id = ?";
        return db.get(query, [id]);
    },
    getTodos : async () => {
        const db = await dbPromise;
        let query = "select id, username, task from tasks;";
        return db.all(query, []);
    },
    saveTodo: async (username, task) => {
        const db = await dbPromise;
        let query = `insert into tasks(username, task) values('${username}', '${task}')`;
        return db.exec(query)
    }
};
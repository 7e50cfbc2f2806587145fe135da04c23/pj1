const express = require('express');
const cors = require('cors');
const settings = require("./settings.json");
const app = express();
const port = process.env.PORT || settings.host.port;
app.use(cors());
app.use(express.json());
app.use('/', express.static('dist'));


const service = require('./routes-api');
app.use('/api/', service);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
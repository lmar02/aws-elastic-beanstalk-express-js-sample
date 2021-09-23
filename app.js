const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I have edited this text for the purpose of the AWS Dev Ops learning fundementals program'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

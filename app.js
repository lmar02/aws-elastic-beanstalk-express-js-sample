const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Completed the learning centers program for setting up piplines'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

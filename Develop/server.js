const express = require('express');
const fs = require('fs');
const path = require('path');

// const api = require('./routes/routes.js');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(__dirname));

app.use(express.static('public'));

//Require routes file
require('./routes/routes')(app);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} `)
);
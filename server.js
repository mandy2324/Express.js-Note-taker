const express = require('express');
// const fs = require('fs');
const path = require('path');

const api = require('./routes/routes.js');


const PORT = process.env.PORT || 3001;

const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// app.use(express.static(__dirname));
app.use(express.static('public'));



app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
    console.log("success notes file");
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} `)
);

// const routesRouter = require('./routes');

// app.use('/routes', routesRouter);

// module.exports = router;
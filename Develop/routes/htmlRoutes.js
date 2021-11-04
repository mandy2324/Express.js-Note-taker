const path = require('path');
const router = require('express').Router();

// const api = require('../routes/routes.js');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './/public/notes.html'));
    console.log("success");
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './/public/index.html'));
});



module.exports = router;
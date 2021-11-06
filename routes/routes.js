const { ok } = require('assert');
const fs = require('fs');

const path = require('path');

const router = require('express').Router();

const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

const { v4: uuidv4 } = require('uuid');
// app.get('/', (req, res) => {
//     console.lnfo(`${req.method} request recieved for notes page`);

//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));


// });



// app.post('/', (req, res) => {
//     console.info(`${req.method} request received to post a note`);
//     const { tile, text } = req.body;

//     if (tile && text) {
//         const newNote = {
//             tile,
//             text,

//         };

//     });

// module.exports = app;








// Setup notes variable
const readNotes = () => {
    return readFileAsync("db/db.json", "utf8");

}


// API ROUTES


// Setup the /api/notes get route
router.get("/notes", async function(req, res) {

    const getNotes = await readNotes();
    const notes = JSON.parse(getNotes);
    // Read the db.json file and return all saved notes as JSON.
    console.log(notes);
    res.json(notes);


});

// Setup the /api/notes post route
router.post("/notes", async function(req, res) {
    const getNotes = await readNotes();
    const notes = JSON.parse(getNotes);
    // Receives a new note, adds it to db.json, then returns the new note
    const { title, text } = req.body;
    let newNote = { title, text, id: uuidv4() };

    notes.push(newNote);
    updateDb(notes);
    res.json(newNote);
});



// Deletes a note with specific id
router.delete("/notes/:id", async function(req, res) {
    const getNotes = await readNotes();
    const notes = JSON.parse(getNotes);
    const filteredNotes = notes.filter(note => note.id !== req.params.id);
    updateDb(filteredNotes);
    res.json({ ok: true });
});



//updates the json file whenever a note is added or deleted
function updateDb(notes) {
    fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return true;
    });
}



module.exports = router;
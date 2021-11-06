# 11 Express.js: Note Taker

## User Story:

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

- This application is built using an Express.js back end and is saving and retrieving note data from a JSON file.

- Run npm install to install all dependencies. To use the application locally, run node server.js in your CLI, and then open http://localhost:3001 in your preferred browswer. The Note Taker app is live on [Heroku](https://thawing-ridge-42340.herokuapp.com/notes) for you to use as well.

## Acceptance Criteria:

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mock-Up:

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](.//Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)

On the back end, the application has a `db.json` file that is used to store and retrieve notes using the `fs` module.

### Deployment:

- Application deployed at live URL [here](https://thawing-ridge-42340.herokuapp.com/notes).

- Application GitHub URL [click here](https://github.com/mandy2324/Express.js-Note-taker.git)

### Contact me:

- [ GITHUB.](https://github.com/mandy2324)

- [ LINKEDIN.](https://www.linkedin.com/in/m23saini)

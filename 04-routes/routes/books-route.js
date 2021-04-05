const express = require("express"); // Imports the Express framework
const router = express.Router(); // Creates an Express router
const books = require("../database/books-database"); // Imports the fake books database

router.get("/:title", (req, res) => { // Adds a basic get endpoint (more on these in next video)
    const book = books.find(book => book.title === req.params.title); // Gets the book with the supplied title from the fake database
    res.send(book); // Sends the book object back
});

module.exports = router; // Exports the router

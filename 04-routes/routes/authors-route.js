const express = require("express"); // Imports the Express framework
const router = express.Router(); // Creates an Express router
const authors = require("../database/authors-database"); // Imports the totally legit authors database

router.get("/:nomme", (req, res) => { // Adds a basic get endpoint
    const author = authors.find(author => author.nomme === req.params.nomme); // Gets the author with the supplied nomme from the database
    res.send(author); // Sends the author object back
});

module.exports = router; // Exports the router
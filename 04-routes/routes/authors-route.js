const express = require("express"); // Imports the Express framework
const router = express.Router(); // Creates an Express router
const authors = require("../database/authors-database"); // Imports the totally legit authors database

router.get("/", (_, res) => {
  res.status(200).send(authors); // Sends all authors back
});

router.get("/:nomme", (req, res) => {
  const author = authors.find((author) => author.nomme === req.params.nomme); // Gets the author with the supplied nomme from the database

  if (typeof author === "undefined") {
    res.status(404).send("Error 404: Author not found.");
  }
  res.status(200).send(author); // Sends the author object back
});

module.exports = router; // Exports the router

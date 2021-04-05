const express = require("express");// Imports the Express framework
const router = express.Router();  // Creates an Express router

router.get("/", (_, res) => { // Adds a basic get endpoint (more on these in next video)
    res.send({ // Sends the below object back
        title: "This is my book API",
        message: "Use the books endpoint to search for a book",
    });
});

module.exports = router; // Exports the router

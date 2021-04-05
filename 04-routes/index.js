// Imports the Express framework, the books and home route
const express = require("express");
const books = require("./routes/books-route");
const home = require("./routes/home-route");

// Creates an app that uses express, and adds the home, books endpoints
const app = express();
app.use("/", home);
app.use("/books", books);

// Starts the app and prints the port on which it listens
app.listen(3000, "127.0.0.1", () => {
    console.log(`Listening on port ${3000}...`);
});

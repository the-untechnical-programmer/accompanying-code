const express = require("express"); // Imports the Express framework
const router = express.Router(); // Creates an Express router
const add = require("../utils/add");
const subtract = require("../utils/subtract")

router.get("/add/:value", (req, res) => {
  const result = add(parseInt(req.params.value), 10);
  res.send({
    title: `The result is ${result}`,
  });
});

router.get("/subtract/:value", (req, res) => {
  const result = subtract(parseInt(req.params.value), 1);
  res.send({
    title: `The result is ${result}`,
  })
});

module.exports = router; // Exports the router
